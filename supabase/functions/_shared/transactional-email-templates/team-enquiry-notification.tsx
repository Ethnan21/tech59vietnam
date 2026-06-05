import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  phone?: string
  enquiry_type?: string
  message?: string
  submitted_at?: string
}

const Email = ({
  name = 'Unknown',
  email = '',
  phone = '',
  enquiry_type = 'Other',
  message = '',
  submitted_at,
}: Props) => {
  const when = submitted_at
    ? new Date(submitted_at).toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh' }) + ' (ICT)'
    : new Date().toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh' }) + ' (ICT)'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{`New TECH59 enquiry — ${enquiry_type} — ${name}`}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={badge}>TECH59 · NEW ENQUIRY</Text>
            <Heading style={h1}>{enquiry_type} enquiry from {name}</Heading>
            <Text style={muted}>{when}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone} />
            <Row label="Type" value={enquiry_type} />
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Reply directly to this email to respond to {name}.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const Row = ({ label: l, value }: { label: string; value: string }) => (
  <Section style={{ marginBottom: '8px' }}>
    <Text style={label}>{l}</Text>
    <Text style={fieldValue}>{value || '—'}</Text>
  </Section>
)

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}
const container = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '32px 24px',
}
const header = { marginBottom: '8px' }
const badge = {
  fontSize: '11px',
  letterSpacing: '0.2em',
  color: '#f97316',
  fontWeight: 700,
  margin: '0 0 8px',
  textTransform: 'uppercase' as const,
}
const h1 = {
  fontSize: '24px',
  fontWeight: 700,
  color: '#0f172a',
  margin: '0 0 8px',
  lineHeight: 1.3,
}
const muted = { fontSize: '13px', color: '#64748b', margin: 0 }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const label = {
  fontSize: '11px',
  letterSpacing: '0.15em',
  color: '#64748b',
  textTransform: 'uppercase' as const,
  margin: '0 0 4px',
  fontWeight: 600,
}
const fieldValue = {
  fontSize: '15px',
  color: '#0f172a',
  margin: 0,
}
const messageStyle = {
  fontSize: '15px',
  color: '#0f172a',
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap' as const,
  margin: 0,
}
const footer = {
  fontSize: '13px',
  color: '#64748b',
  margin: 0,
}

export const template = {
  component: Email,
  subject: (data: Props) =>
    `New TECH59 enquiry — ${data.enquiry_type ?? 'Other'} — ${data.name ?? 'Unknown'}`,
  displayName: 'Team enquiry notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+84 123 456 789',
    enquiry_type: 'Sponsor',
    message: 'We are interested in sponsoring TECH59. Please share the deck.',
  },
} satisfies TemplateEntry
