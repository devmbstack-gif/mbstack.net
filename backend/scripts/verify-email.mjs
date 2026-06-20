/**
 * Verifies Gmail SMTP credentials in backend/.env
 */
import nodemailer from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS?.replace(/\s/g, "");

if (!user || !pass) {
  console.error("FAIL: EMAIL_USER and EMAIL_PASS must be set in backend/.env");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

try {
  await transporter.verify();
  console.log("OK: Gmail SMTP verified for", user);
} catch (err) {
  console.error("FAIL: SMTP verification failed:", err.message);
  process.exit(1);
}
