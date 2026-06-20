'use server';

import nodemailer from 'nodemailer';
import { CONTACT_INFO } from '@/lib/constants';

export async function sendContactEmail(formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    country?: string;
    passengers?: string;
    destination?: string;
    travelDate?: string;
}) {
    const { name, email, phone, subject, message, country, passengers, destination, travelDate } = formData;

    const EMAIL_USER = 'Worldtripmaa@gmail.com';
    const EMAIL_PASS = 'cadnzjdeiprwhwsn';

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: EMAIL_USER,
        to: CONTACT_INFO.email,
        replyTo: email,
        subject: `New Contact Form Submission: ${subject}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Subject: ${subject}
            ${country ? `Country: ${country}` : ''}
            ${destination ? `Destination: ${destination}` : ''}
            ${passengers ? `Passengers: ${passengers}` : ''}
            ${travelDate ? `Travel Date: ${travelDate}` : ''}
            
            Message:
            ${message}
        `,
        html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="color: #1E40AF; margin-top: 0;">New Contact Form Submission</h2>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                    <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                    ${country ? `<p style="margin: 5px 0;"><strong>Country:</strong> ${country}</p>` : ''}
                    ${destination ? `<p style="margin: 5px 0;"><strong>Destination:</strong> ${destination}</p>` : ''}
                    ${passengers ? `<p style="margin: 5px 0;"><strong>Passengers:</strong> ${passengers}</p>` : ''}
                    ${travelDate ? `<p style="margin: 5px 0;"><strong>Travel Date:</strong> ${travelDate}</p>` : ''}
                </div>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                <p><strong>Message:</strong></p>
                <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; font-style: italic;">
                    <p style="white-space: pre-wrap; margin: 0;">${message}</p>
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error: any) {
        console.error('Error sending email:', error);

        let userErrorMessage = 'Failed to send email';
        if (error.code === 'EAUTH') {
            userErrorMessage = 'Authentication failed: The email credentials in the server code are not accepted. Please check the App Password.';
        } else if (error.command === 'CONN') {
            userErrorMessage = 'Connection failed: Please check your internet connection or Google server status.';
        }

        return { success: false, error: userErrorMessage };
    }
}
