import { Resend } from "resend";
import { NextRequest } from "next/server";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, message } = body;

    // Validate presence
    if (!firstName || !email || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate types
    if (
      typeof firstName !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    // Validate lengths
    if (firstName.length > 100 || email.length > 254 || message.length > 2000) {
      return Response.json({ error: "Input too long" }, { status: 400 });
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check required env vars
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    if (!process.env.EMAIL_FROM) {
      console.error("EMAIL_FROM is not configured");
      return Response.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.EMAIL_TO || "milan.zivanov@gmail.com"],
      replyTo: email,
      subject: `Nova poruka od ${firstName}`,
      react: await EmailTemplate({ firstName, email, message })
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email"
      },
      { status: 500 }
    );
  }
}
