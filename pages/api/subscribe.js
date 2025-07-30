import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Newsletter Bot" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER, // Your receiving email
      subject: 'New Newsletter Subscription',
      html: `
        <h3>New Subscriber</h3>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    return res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Newsletter email error:", error);
    return res.status(500).json({ message: "Server error. Try again later." });
  }
}
