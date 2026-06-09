// app/actions/contact.ts
"use server";
import { sendNotificationEmail } from "@/lib/mail";
import prisma from "@/lib/prisma";

type ContactState = { success?: boolean; message?: string; timestamp?: number } | null;
export async function submitContactForm(prevState: ContactState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in all fields",
    };
  }

  try {
    await prisma.contactInquiry.create({
      data: { name, email, message },
    });

    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // For 24-hour format
    });

    const formattedDate = dateFormatter.format(new Date());
    await sendNotificationEmail({
      subject: `New Contact Inquiry: ${name}`,
      customerName: name,
      details: {
        Source: "Contact Form",
        "Email Address": email,
        "Sent At": formattedDate,
      },
      message: message.substring(0, 100) + "...",
    });
    // We return a key to identify success so the client knows when to reset
    return { success: true, message: "Message sent!", timestamp: Date.now() };
  } catch {
    return { success: false, message: "Something went wrong." };
  }
}
