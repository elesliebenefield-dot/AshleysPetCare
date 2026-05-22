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

  if (!to) throw new Error('CONTACT_EMAIL env var is not set');

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
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
}
