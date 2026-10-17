import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { name, email, message, website } = await request.json();

    // Quietly accept honeypot submissions to discourage simple bots.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 100 ||
      !EMAIL_PATTERN.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check your name, email, and message, then try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL;

    if (!apiKey || !recipient) {
      console.error("Contact form is missing RESEND_API_KEY or CONTACT_EMAIL.");
      return NextResponse.json(
        { error: "The contact form is not configured yet. Please try again later." },
        { status: 503 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ridwan Portfolio <onboarding@resend.dev>",
        to: [recipient],
        reply_to: cleanEmail,
        subject: `Portfolio message from ${cleanName}`,
        text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend email request failed:", details);
      return NextResponse.json(
        { error: "Your message could not be sent right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form request failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
