import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name")?.trim() || "";
    const email = searchParams.get("email")?.trim() || "";
    const message = searchParams.get("message")?.trim() || "";
    const subject =
      searchParams.get("subject")?.trim() || "Contact Form Submission";

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, or message.",
        },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message: "One or more fields exceed character limits.",
        },
        { status: 400 }
      );
    }

    const sanitizedName = validator.escape(name);
    const sanitizedEmail = validator.normalizeEmail(email) || "";
    const sanitizedSubject = validator.escape(subject);
    const sanitizedMessage = validator.escape(message);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Contact: ${sanitizedSubject}`,
      text: `
You have received a new message from your contact form.

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Message: ${sanitizedMessage}
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal error occurred while sending the email.",
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
