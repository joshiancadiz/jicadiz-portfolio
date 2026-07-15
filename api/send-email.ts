import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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
            subject: `Portfolio Contact: ${fullName}`,
            replyTo: email,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
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
