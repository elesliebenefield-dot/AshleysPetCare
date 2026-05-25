import { Resend } from 'resend';

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  petName: string;
  petType: string;
  service: string;
  message: string;
}

export async function sendInquiryEmail(data: InquiryPayload): Promise<void> {
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev';

  console.log('[sendEmail] CONTACT_EMAIL set:', !!to);
  console.log('[sendEmail] RESEND_API_KEY set:', !!process.env.RESEND_API_KEY);
  console.log('[sendEmail] RESEND_FROM_EMAIL set:', !!process.env.RESEND_FROM_EMAIL);
  console.log('[sendEmail] from address:', from);

  if (!to) throw new Error('CONTACT_EMAIL env var is not set');

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data: result, error } = await resend.emails.send({
    from: `Ashley's Pet Care <${from}>`,
    to,
    replyTo: data.email,
    subject: `New Inquiry: ${data.name} — ${data.service}`,
    text: [
      "New inquiry from Ashley's Pet Care website",
      '',
      `Name:          ${data.name}`,
      `Email:         ${data.email}`,
      `Phone:         ${data.phone || 'Not provided'}`,
      `Pet Name:      ${data.petName || 'Not provided'}`,
      `Pet Type:      ${data.petType || 'Not provided'}`,
      `Service:       ${data.service}`,
      '',
      'Message:',
      data.message,
    ].join('\n'),
  });

  if (error) {
    console.error('[sendEmail] Resend error:', error);
    throw new Error(`Resend failed: ${error.message}`);
  }

  console.log('[sendEmail] Resend success, id:', result?.id);
}
