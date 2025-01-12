import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email';

const transporter = nodemailer.createTransport(emailConfig.smtp);

export async function sendNewsletterConfirmation(email: string): Promise<void> {
  const mailOptions = {
    from: `${emailConfig.from.name} <${emailConfig.smtp.auth.user}>`,
    to: email,
    subject: 'Welcome to GRIFZ Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #000; text-align: center;">Welcome to GRIFZ Newsletter!</h1>
        <p>Thank you for subscribing to our newsletter. You'll be the first to know about:</p>
        <ul>
          <li>New collections and arrivals</li>
          <li>Exclusive offers and discounts</li>
          <li>Fashion tips and style guides</li>
          <li>Special events and promotions</li>
        </ul>
        <p>Stay stylish!</p>
        <p>The GRIFZ Team</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending newsletter confirmation:', error);
    throw new Error('Failed to send newsletter confirmation');
  }
}