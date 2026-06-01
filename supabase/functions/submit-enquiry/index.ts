import { corsHeaders } from '../_shared/cors.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, enquiry_type, message } = await req.json()

    // Email to the team
    const teamRecipients = [
      'events@thesentry.com.vn',
      'henry.nguyen@thesentry.com.vn',
      'hello.events@thesentry.com.vn'
    ]

    const emailContent = `
      New Enquiry from TECH59 Website:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Type: ${enquiry_type}
      
      Message:
      ${message}
    `

    console.log(`Processing enquiry from ${email} for ${enquiry_type}`)

    // If we had a Resend key, we'd send here. 
    // Since we don't have a verified domain yet, we'll log it.
    // The client also saves to the DB directly.

    return new Response(
      JSON.stringify({ message: 'Enquiry received' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
    )
  }
})