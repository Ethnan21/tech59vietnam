## What's broken

Your form is saving correctly, but no email goes out. The edge function logs show the real cause:

```
send failed ... status: 401 Unauthorized
sb-error-code: UNAUTHORIZED_INVALID_JWT_FORMAT
```

`submit-enquiry` (server-side) calls `send-transactional-email` via `supabase.functions.invoke(...)`. That helper doesn't auto-attach a valid JWT when called from another edge function, and `send-transactional-email` is configured with `verify_jwt = true`, so the gateway rejects every call before it runs. Result: nothing is ever enqueued, nothing sends.

Domain `notify.tech59vietnam.com` is verified ✅, infrastructure is in place — only the auth handoff between the two functions is wrong.

## Fix

In `supabase/functions/submit-enquiry/index.ts`, attach the service-role key as the Authorization header when invoking the send function:

```ts
supabase.functions.invoke('send-transactional-email', {
  headers: { Authorization: `Bearer ${supabaseServiceKey}` },
  body: { ... }
})
```

Then redeploy `submit-enquiry`. No template, domain, or schema changes needed. No new permissions or connectors required — service-role key is already in the environment.

After deploy, I'll submit a test enquiry and confirm via the edge function logs + `email_send_log` table that the three team recipients (`events@`, `henry.nguyen@`, `hello.events@thesentry.com.vn`) get a `sent` status.

## How to view responses in Lovable

Two places, both in the left sidebar of your project:

1. **Form submissions** — open **Cloud → Database → `enquiries` table**. Every form submit is a row here (name, email, phone, type, message, created_at). This is the durable record even if email ever fails.
2. **Email delivery log** — open **Cloud → Emails** (or the `email_send_log` table in Database). Shows per-recipient status: `pending`, `sent`, `failed`, `suppressed`. Use this to confirm Henry / events / hello.events actually received the notification.

I can also build a small in-app admin page listing enquiries if you'd like a friendlier view than the raw table — say the word and I'll add it after the fix.
