import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

interface EmailParams {
  subject: string;
  customerName: string;
  details: Record<string, string | null | undefined>;
  message: string;
}

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS?.replace(/\s/g, ""),
    },
  });

  async sendNotificationEmail(params: EmailParams) {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return;
    }

    const detailRows = Object.entries(params.details)
      .filter(([, value]) => value)
      .map(
        ([key, value]) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold; width: 30%;">${key}</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">${value}</td>
      </tr>
    `,
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html><body style="font-family: sans-serif; background:#f8fafc; padding:24px;">
        <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;padding:32px;">
          <h2 style="color:#1e293b;">New Request from ${params.customerName}</h2>
          <table width="100%">${detailRows}</table>
          <div style="margin-top:24px;background:#f1f5f9;padding:16px;border-radius:8px;">
            <p style="margin:0;color:#334155;">${params.message}</p>
          </div>
        </div>
      </body></html>
    `;

    await this.transporter.sendMail({
      from: `"MB Stack Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER ?? process.env.EMAIL_USER,
      subject: params.subject,
      html,
    });
  }
}
