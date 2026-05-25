import { NextRequest } from 'next/server';
import { sendInquiryEmail, type InquiryPayload } from '@/lib/sendEmail';

export async function POST(request: NextRequest) {
  console.log('[contact] POST received');
  try {
    const body = (await request.json()) as Partial<InquiryPayload>;
    const {
      name,
      email,
      phone = '',
      petName = '',
      petType = '',
      service,
      message,
    } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
      console.log('[contact] validation failed — missing required fields');
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sendInquiryEmail({ name, email, phone, petName, petType, service, message });

    console.log('[contact] email sent successfully');
    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] error:', err);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
