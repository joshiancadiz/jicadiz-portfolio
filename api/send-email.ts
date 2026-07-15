import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['cadiz.joshuaiang@gmail.com'],
            replyTo: email,
            subject: `New inquiry from ${fullName}`,
            html: `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="margin-bottom: 4px;">New Contact Form Submission</h2>
      <p style="color: #666; font-size: 14px; margin-top: 0;">Sent from your portfolio contact form</p>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="padding: 8px 0; color: #666; width: 80px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
          <td style="padding: 8px 0;">
            <a href="mailto:${escapeHtml(email)}" style="color: #2563eb;">${escapeHtml(email)}</a>
          </td>
        </tr>
      </table>

      <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin-top: 12px;">
        <p style="margin: 0 0 8px; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
        <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</p>
      </div>

      <p style="color: #999; font-size: 12px; margin-top: 24px;">
        Reply directly to this email to respond to ${escapeHtml(fullName)}.
      </p>
    </div>
  `,
            text: `New Contact Form Submission\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        return res.status(200).json({ success: true, data });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Internal server error';
        return res.status(500).json({ error: errorMessage });
    }
}
