// actions/consultancy.ts
"use server";
import prisma from "@/lib/prisma";
import { sendNotificationEmail } from "@/lib/mail"; // Import your mailer

type ConsultancyState = { success?: boolean; message?: string } | null;
export async function submitConsultancy(prevState: ConsultancyState, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const type = formData.get("type") as string;
  const budget = formData.get("budget") as string;
  const packageName = formData.get("package") as string;
  const description = formData.get("description") as string;

  if (!name || !email || !type || !budget || !packageName || !description) {
    return {
      success: false,
      message: "Please fill in all fields",
    };
  }

  try {
    // 1. Save to Database
    await prisma.consultancyRequest.create({
      data: {
        name,
        email,
        type,
        budget,
        packageName,
        description,
      },
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
    // 2. Send Professional Email
    await sendNotificationEmail({
      subject: `New Strategy Session: ${name}`,
      customerName: name,
      details: {
        Email: email,
        "Service Type": type,
        Package: packageName !== "none" ? packageName : "Custom/None",
        "Budget Range (USD)": budget,
        "Request Date": formattedDate,
      },
      message: description,
    });

    return {
      success: true,
      message:
        "Consultancy request sent successfully! We'll reach out within 24 hours.",
      resetKey: Date.now(),
    };
  } catch (error) {
    console.error("Consultancy Action Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
