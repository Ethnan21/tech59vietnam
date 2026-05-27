## 1. Re-route partnership & booth CTAs to #contact

Update these so they smooth-scroll to the `#contact` section instead of opening Luma:

- `src/components/tech59/Navbar.tsx` — no change (Register stays Luma). ✓
- `src/components/tech59/Hero.tsx` — "Become a Partner" already targets `#partners`; change to `#contact`.
- `src/components/tech59/Audience.tsx` — for the `Enterprise` and `Founder` tabs (CTA "Get a Booth"), point the CTA to `#contact` instead of the Luma URL. The `Investor`, `Innovator`, and `Attendee` tabs ("Get My Spot") keep the Luma link.
- `src/components/tech59/Packages.tsx` and `src/components/tech59/Partners.tsx` — audit and switch any "Become a Partner / Get a Booth / Sponsor / Enquire" buttons to `#contact`. Keep pass/ticket CTAs on Luma.

Anchors use the existing `#contact` id on `FinalCTA`. Smooth scroll already works via the browser default plus any existing CSS.

## 2. Wire the contact form to send enquiries via Outlook

Goal: when a visitor submits the form on the page, an email is delivered to `events@thesentry.com.vn` from the connected Microsoft Outlook account — no redirect, no mailto.

Steps:

1. **Enable Lovable Cloud** (required for backend / edge functions and to store the connector secret).
2. **Connect Microsoft Outlook** via the connectors flow. The Outlook account that authorizes will be the sender; enquiries are delivered to `events@thesentry.com.vn` in that same inbox.
3. **Create an edge function** `send-enquiry` that:
   - Validates the request body with Zod (`name`, `email`, `enquiry`, `message`, with sane length caps).
   - Calls the Outlook gateway `POST https://connector-gateway.lovable.dev/microsoft_outlook/me/sendMail` with:
     - `toRecipients`: `events@thesentry.com.vn`
     - `replyTo`: the submitter's email
     - `subject`: `[TECH59 Enquiry] {enquiry}`
     - `body`: HTML body containing name, email, enquiry type, message
   - Returns `{ ok: true }` or a structured error. CORS headers included.
   - Simple in-memory rate limit (per-IP, e.g. 5/min) to deter abuse.
4. **Update `src/components/tech59/FinalCTA.tsx`**:
   - Replace the `mailto:` submit with `supabase.functions.invoke('send-enquiry', { body: {...} })`.
   - Show a success state ("Thanks — we'll be in touch") and an error toast on failure.
   - Keep current client-side validation; add a "sending…" disabled state on the button.
5. **Confirmation email to the submitter** (optional, recommended): if you'd like, the same function can also send a short "Thanks for reaching out" reply to the submitter from the same Outlook account. Default: yes, enabled.

## Notes on "Microsoft Forms format"

Microsoft Forms is a separate product where responses land in an Excel workbook (and an optional email notification). It can't be submitted to from a custom form on your site without redirecting to forms.office.com. The approach above achieves your real goal — enquiries arrive in the `events@thesentry.com.vn` Outlook inbox, formatted cleanly, with no redirect — using your Outlook directly. If you ever do want an embedded Microsoft Form instead, I can swap the form for an iframe of a Form you create.

## Technical summary

- Files changed: `Hero.tsx`, `Audience.tsx`, `Packages.tsx`, `Partners.tsx`, `FinalCTA.tsx`.
- New files: `supabase/functions/send-enquiry/index.ts` (+ config entry).
- New infra: Lovable Cloud enabled, Microsoft Outlook connector linked.
- No database tables required (fire-and-forward email). We can add a `contact_submissions` table later if you want a backup log.
