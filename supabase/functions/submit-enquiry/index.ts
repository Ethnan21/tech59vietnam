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
        const { data, error } = await supabase.functions.invoke('send-transactional-email', {
          headers: { Authorization: `Bearer ${supabaseAnonKey}` },
          body: {
            templateName: 'team-enquiry-notification',
            recipientEmail: recipient,
            idempotencyKey: `enquiry-${baseKey}-${recipient}`,
            templateData,
          },
        })
        if (error) console.error('send failed for', recipient, error)
        return { recipient, ok: !error, data, error: error?.message }
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
