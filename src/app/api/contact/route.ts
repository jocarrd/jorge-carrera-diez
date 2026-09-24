import { NextResponse } from "next/server";
import { site } from "@/content";

export const runtime = "nodejs";

const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type Payload = {
  name?: string;
  email?: string;
  product?: string;
  need?: string;
  company?: string;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !from) {
    return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  }

  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  if (clean(payload.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const product = clean(payload.product, 300);
  const need = clean(payload.need, 4000);

  if (!name || !need || !EMAIL.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const body = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Producto: ${product || "-"}`,
    "",
    need,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [site.email],
      reply_to: email,
      subject: `Encargo desde la web: ${name}`,
      text: body,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "provider" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
