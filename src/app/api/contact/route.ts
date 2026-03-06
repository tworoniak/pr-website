import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  artistName?: string;
  company?: string;
  service?: string;
  timeline?: string;
  message?: string;
};

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const artistName = body.artistName?.trim() ?? '';
    const company = body.company?.trim() ?? '';
    const service = body.service?.trim() ?? '';
    const timeline = body.timeline?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: 'Missing RESEND_API_KEY environment variable.' },
        { status: 500 },
      );
    }

    if (!to || !from) {
      return NextResponse.json(
        {
          message:
            'Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL environment variable.',
        },
        { status: 500 },
      );
    }

    const subject = artistName
      ? `New PR inquiry from ${name} — ${artistName}`
      : `New PR inquiry from ${name}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111;">
        <h1 style="font-size: 22px; margin-bottom: 16px;">New Contact Inquiry</h1>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Artist / Band:</strong> ${escapeHtml(artistName || '—')}</p>
        <p><strong>Label / Company:</strong> ${escapeHtml(company || '—')}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || '—')}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline || '—')}</p>

        <hr style="margin: 24px 0;" />

        <h2 style="font-size: 18px; margin-bottom: 8px;">Project Details</h2>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const text = `
New Contact Inquiry

Name: ${name}
Email: ${email}
Artist / Band: ${artistName || '—'}
Label / Company: ${company || '—'}
Service: ${service || '—'}
Timeline: ${timeline || '—'}

Project Details:
${message}
    `.trim();

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      return NextResponse.json(
        { message: error.message || 'Failed to send inquiry email.' },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: 'Inquiry received successfully.' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { message: 'Unable to process your request right now.' },
      { status: 500 },
    );
  }
}
