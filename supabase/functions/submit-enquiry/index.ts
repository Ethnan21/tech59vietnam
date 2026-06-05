import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

const TEAM_RECIPIENTS = [
  'events@thesentry.com.vn',
  'henry.nguyen@thesentry.com.vn',
  'hello.events@thesentry.com.vn',
]

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, enquiry_type, message, enquiry_id } = await req.json()

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const submitted_at = new Date().toISOString()
    const baseKey = enquiry_id ?? `${email}-${submitted_at}`

    const templateData = { name, email, phone, enquiry_type, message, submitted_at }

    const results = await Promise.all(
      TEAM_RECIPIENTS.map(async (recipient) => {
        try {
          const res = await fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${supabaseAnonKey}`,
              apikey: supabaseAnonKey,
            },
            body: JSON.stringify({
              templateName: 'team-enquiry-notification',
              recipientEmail: recipient,
              idempotencyKey: `enquiry-${baseKey}-${recipient}`,
              templateData,
            }),
          })
          const text = await res.text()
          if (!res.ok) {
            console.error('send failed for', recipient, res.status, text)
            return { recipient, ok: false, error: `${res.status}: ${text}` }
          }
          return { recipient, ok: true, data: text }
        } catch (e) {
          console.error('send threw for', recipient, e)
          return { recipient, ok: false, error: (e as Error).message }
        }
      })
    )

    return new Response(
      JSON.stringify({ message: 'Enquiry processed', results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    console.error('submit-enquiry error', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})
