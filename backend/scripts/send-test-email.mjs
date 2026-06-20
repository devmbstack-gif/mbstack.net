/**
 * Sends a real test notification email using backend mail config.
 */
import nodemailer from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS?.replace(/\s/g, "");
const receiver = process.env.EMAIL_RECEIVER ?? user;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

const info = await transporter.sendMail({
  from: `"MB Stack Test" <${user}>`,
  to: receiver,
  subject: "MB Stack contact flow test",
  html: "<p>Contact form email pipeline is working.</p>",
});

console.log("OK: Test email sent:", info.messageId);
