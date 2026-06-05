import type { ComponentType } from 'npm:react@18.3.1'
import { template as teamEnquiryNotification } from './team-enquiry-notification.tsx'

export interface TemplateEntry {
  component: ComponentType<any>
  subject: string | ((data: any) => string)
  displayName?: string
  previewData?: Record<string, unknown>
  to?: string | string[] | ((data: any) => string | string[])
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'team-enquiry-notification': teamEnquiryNotification,
}
