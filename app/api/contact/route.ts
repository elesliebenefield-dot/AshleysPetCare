import { NextRequest } from 'next/server';
import { sendInquiryEmail, type InquiryPayload } from '@/lib/sendEmail';

export async function POST(request: NextRequest) {
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
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sendInquiryEmail({ name, email, phone, petName, petType, service, message });

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] error:', err);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
