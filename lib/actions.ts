"use server";

import { EnvCheckResult, EnvCheckAction } from "@joycostudio/v0-setup";

export const checkEnvs: EnvCheckAction = async () => {
  // Only check environment variables in development
  if (process.env.NODE_ENV === 'production') {
    return {
      envs: [],
      allValid: true,
    };
  }

  const requiredEnvs = [
    { name: 'KV_REST_API_URL', label: 'KV REST API URL' },
    { name: 'KV_REST_API_TOKEN', label: 'KV REST API Token' },
  ];

  const envs: EnvCheckResult[] = requiredEnvs.map(env => ({
    name: env.name,
    label: env.label,
    isValid: Boolean(process.env[env.name]),
  }));

  const allValid = envs.every(env => env.isValid);

  return {
    envs,
    allValid,
  };
}

import { Resend } from 'resend';

// Resend API configured for contact form
// To update the 'from' email, verify your domain at: https://resend.com/domains
const resend = new Resend('re_ZWaP1ybE_341P933ZQzvWyBbFC4roNCgg');

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const message = formData.get('message') as string

  // Validate required fields
  if (!name || !email || !message) {
    return { success: false, error: 'Please fill in all required fields' }
  }

  try {
    // Using Resend to send email
    const { data, error } = await resend.emails.send({
      from: 'Overcast Contact <onboarding@resend.dev>', // Change to your verified domain email
      to: ['raghav@overcastsre.com'],
      subject: `Contact Form: ${name} from ${company || 'N/A'}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send message. Please try again.' }
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
