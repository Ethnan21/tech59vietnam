# Team-only enquiry notifications

## Goal
When someone submits the enquiry form, your 3 team addresses get an email with their details. The submitter sees only an on-screen confirmation — no email is sent to them.

## What changes

1. **Email sender domain** — Set up a verified sender domain (e.g. `notify.tech59vietnam.com`) via Lovable's built-in email setup. One-click dialog, no API keys needed.

2. **Edge function `submit-enquiry`** — Rewritten to enqueue ONE email addressed to:
   - events@thesentry.com.vn
   - henry.nguyen@thesentry.com.vn
   - hello.events@thesentry.com.vn
   
   Subject: `New TECH59 enquiry — {enquiry_type} — {name}`  
   Body: name, email, phone, type, message, timestamp. Reply-To set to the submitter's email so your team can reply directly from their inbox.

3. **New transactional template** `team-enquiry-notification.tsx` — Branded internal notification template (dark TECH59 styling).

4. **Frontend (`EnquiryForm.tsx`)** — No changes to UX. Still saves to `enquiries` table as backup, then invokes the edge function. On success → toast "Enquiry sent! We'll be in touch soon." Submitter receives nothing.

5. **Database** — `enquiries` table already exists. No schema changes.

## Technical notes
- Uses Lovable's email queue (pgmq + cron) for retry safety and rate-limit handling.
- Idempotency key = enquiry row id → safe against duplicate submits.
- Suppression list is irrelevant here since recipients are your own team.
- If email ever fails, the row is still in the database as a backup record.

## Files touched
- New: `supabase/functions/_shared/transactional-email-templates/team-enquiry-notification.tsx`
- Updated: `_shared/transactional-email-templates/registry.ts` (after scaffolding)
- Rewritten: `supabase/functions/submit-enquiry/index.ts` — invokes `send-transactional-email` with the team template + 3 recipients
- No frontend changes needed

## What you'll need to do
One click in the email domain setup dialog to verify your sender subdomain. After that, everything is automatic.