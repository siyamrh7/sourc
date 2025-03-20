// Import the controller from your existing file
// Assuming this file is saved as 'lib/emailService.js' or similar
import { contactEmailController } from '../../lib/emailService';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'Alle velden zijn verplicht' });
  }

  try {
    // Format the email content
    const mailOptions = {
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      body: {
        contentType: 'HTML',
        content: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      },
      toRecipients: [
        {
          emailAddress: {
            address: process.env.RECIPIENT_EMAIL || 'info@fitpreps.nl'
          }
        }
      ],
      replyTo: [
        {
          emailAddress: {
            address: email
          }
        }
      ]
    };

    // Call your existing controller function
    await contactEmailController(mailOptions);

    // Return success response
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      message: 'Failed to send email', 
      error: error.message 
    });
  }
}