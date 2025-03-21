import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, storeConsent, privacyConsent } = body;

    // Validate required fields
    if (!name || !email || !phone || !message || !storeConsent || !privacyConsent) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content for company notification
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tgabuildersinc@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://tgabuildersinc.com/logo.PNG" alt="TGA Builders Inc. Logo" style="max-width: 200px; height: auto;">
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #17416E;">
            <h2 style="color: #17416E; margin-top: 0;">New Contact Form Submission</h2>
            <div style="display: grid; grid-template-columns: auto 1fr; gap: 10px; margin-top: 20px;">
              <div style="font-weight: bold; color: #17416E;">Name:</div>
              <div>${name}</div>
              
              <div style="font-weight: bold; color: #17416E;">Email:</div>
              <div>${email}</div>
              
              <div style="font-weight: bold; color: #17416E;">Phone:</div>
              <div>${phone}</div>
              
              <div style="font-weight: bold; color: #17416E;">Message:</div>
              <div style="white-space: pre-wrap;">${message}</div>
              
              <div style="font-weight: bold; color: #17416E;">Consent to Inquiry:</div>
              <div>${storeConsent ? '✅ Yes' : '❌ No'}</div>
              
              <div style="font-weight: bold; color: #17416E;">Privacy Policy Confirmed:</div>
              <div>${privacyConsent ? '✅ Yes' : '❌ No'}</div>
            </div>
          </div>
        </div>
      `,
    };

    // Email content for user thank you
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting TGA Builders Inc.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header with Logo -->
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://tgabuildersinc.com/logo.PNG" alt="TGA Builders Inc. Logo" style="max-width: 200px; height: auto;">
          </div>

          <!-- Main Content -->
          <div style="background-color: #f8f9fa; padding: 30px; border-radius: 6px; border-left: 4px solid #17416E;">
            <h2 style="color: #17416E; margin-top: 0; text-align: center;">Thank You for Contacting TGA Builders Inc.</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">Thank you for reaching out to TGA Builders Inc. We have received your message and will get back to you as soon as possible.</p>
            
            <div style="background-color: #ffffff; padding: 20px; border-radius: 6px; margin: 20px 0; border: 1px solid #e2e8f0;">
              <h3 style="color: #17416E; margin-top: 0;">Your Inquiry Summary</h3>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px; display: flex; align-items: center;">
                  <span style="color: #17416E; margin-right: 10px;">👤</span>
                  <strong>Name:</strong> ${name}
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: center;">
                  <span style="color: #17416E; margin-right: 10px;">📞</span>
                  <strong>Phone:</strong> ${phone}
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: center;">
                  <span style="color: #17416E; margin-right: 10px;">✉️</span>
                  <strong>Email:</strong> ${email}
                </li>
                <li style="margin-bottom: 10px; display: flex; align-items: center;">
                  <span style="color: #17416E; margin-right: 10px;">💬</span>
                  <strong>Message:</strong> ${message}
                </li>
              </ul>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <p style="font-size: 16px; color: #333; margin-bottom: 15px;">If you have any immediate questions, please don't hesitate to call us at:</p>
              <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
                <div style="background-color: #17416E; color: white; padding: 10px 20px; border-radius: 6px; display: inline-flex; align-items: center;">
                  <span style="margin-right: 8px;">📞</span>
                  <strong>(747) 303-8403</strong>
                </div>
                <div style="background-color: #17416E; color: white; padding: 10px 20px; border-radius: 6px; display: inline-flex; align-items: center;">
                  <span style="margin-right: 8px;">📞</span>
                  <strong>(702) 755-3316</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #666; margin: 0;">Best regards,<br>The TGA Builders Inc. Team</p>
            <div style="margin-top: 20px;">
              <img src="https://tgabuildersinc.com/logo.PNG" alt="TGA Builders Inc. Logo" style="max-width: 150px; height: auto;">
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { error: 'Failed to send emails' },
      { status: 500 }
    );
  }
} 