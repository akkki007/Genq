import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const REQUIRED_FIELDS = ["fullName", "workEmail", "message"] as const;

const REQUIRED_ENV_VARS = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"] as const;

type RequiredField = (typeof REQUIRED_FIELDS)[number];

const hasAllEnvVars = REQUIRED_ENV_VARS.every((envVar) => Boolean(process.env[envVar]));

const buildHtmlTemplate = (data: Record<string, string>) => {
  const rows = Object.entries(data)
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:600;text-transform:capitalize;border-bottom:1px solid #f2f2f2;">${label.replace(/([A-Z])/g, " $1").trim()}</td>
          <td style="padding:8px 12px;color:#111827;border-bottom:1px solid #f2f2f2;">${value}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <table style="width:100%;border-collapse:collapse;font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;font-size:14px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <thead>
        <tr>
          <th colspan="2" style="text-align:left;padding:20px 24px;background:#0f172a;color:#f8fafc;font-size:18px;">
            New enquiry via genq.co contact form
          </th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
};

export async function POST(request: Request) {
  const body = await request.json();
  const payload = {
    fullName: body.fullName?.toString().trim(),
    workEmail: body.workEmail?.toString().trim(),
    company: body.company?.toString().trim(),
    role: body.role?.toString().trim(),
    region: body.region?.toString().trim(),
    teamSize: body.teamSize?.toString().trim(),
    message: body.message?.toString().trim(),
  };

  const missingFields: RequiredField[] = REQUIRED_FIELDS.filter((field) => !payload[field]);

  if (missingFields.length) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(", ")}` },
      { status: 400 },
    );
  }

  if (!hasAllEnvVars) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set SMTP environment variables." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Genq Website" <${process.env.EMAIL_FROM ?? process.env.SMTP_USER}>`,
      to: "info@genq.co.in",
      replyTo: payload.workEmail,
      subject: `New contact request from ${payload.fullName}`,
      html: buildHtmlTemplate(payload),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[CONTACT_FORM_ERROR]", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}


