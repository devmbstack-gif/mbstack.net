import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Reminder: Use an "App Password" here!
  },
});

interface EmailParams {
  subject: string;
  customerName: string;
  details: Record<string, string | null | undefined>; // Flexible for contact or consultancy
  message: string;
}

export async function sendNotificationEmail({
  subject,
  customerName,
  details,
  message,
}: EmailParams) {
  // Generate the detail rows dynamically
  const detailRows = Object.entries(details)
    .filter(([, value]) => value) // Don't show empty fields
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
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8fafc; padding: 5px;">
        <tr>
          <td align="center">
            <table class="container" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background-color: #ffffff; padding: 40px; text-align: center;">
                  <img src="https://mbstack.net/assets/mb-stack-logo-r-r-BIB1IFhA.png" alt="MBStack" style="width: 40%; height: 40%; object-fit: contain;">
                </td>
              </tr>

              <tr>
                <td style="padding: 40px; background-color: #ffffff;">
                  <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 22px;">New Request from ${customerName}</h2>
                  
                  <table width="100%" border="0" cellspacing="1" cellpadding="1" style="margin-bottom: 30px;">
                    ${detailRows}
                  </table>

                  <div style="background-color: #f1f5f9; border-left: 4px solid #38bdf8; padding: 20px; border-radius: 8px;">
                    <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase;">Message / Project Details:</p>
                    <p style="margin: 0; color: #334155; font-size: 16px; line-height: 1.6;">${message}</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding: 30px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
                  <p style="color: #94a3b8; font-size: 12px; margin: 10px 0 0 0;">&copy; ${new Date().getFullYear()} MB Stack</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const mailOptions = {
    from: `"MBStack Lead" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: subject,
    html: html,
  };

  return await transporter.sendMail(mailOptions);
}
