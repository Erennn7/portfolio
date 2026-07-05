import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

    // Check if SMTP is configured
    if (!host || !port || !user || !pass) {
      console.warn("SMTP configurations are missing. Simulating success in development/fallback mode.");
      console.log("--- Contact Form Message Received ---");
      console.log(`From: ${name} <${email}>`);
      console.log(`Message:\n${message}`);
      console.log("--------------------------------------");

      // Simulate network latency for visual feedback
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return NextResponse.json({
        success: true,
        message: "Message logged successfully (Fallback Mode: SMTP not configured).",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port, 10),
      secure: port === "465", // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    // Mail options
    const mailOptions = {
      from: `"${name}" <${user}>`, // Best practice for SMTP delivery to send from authenticated SMTP user
      replyTo: email, // Direct replies back to the sender
      to: receiver,
      subject: `New Contact Form Message from ${name}`,
      text: `You have received a new contact form message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}
`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 5px;">
          <h2 style="border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #333; margin-top: 10px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Error in contact route handler:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
