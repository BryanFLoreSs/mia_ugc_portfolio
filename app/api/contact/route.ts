import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limited = (value: unknown, max: number) => typeof value === "string" && value.trim().length <= max ? value.trim() : "";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Quietly accept bot submissions without forwarding them.
    if (limited(body.website, 500)) return NextResponse.json({ success: true });
    const name = limited(body.name, 120), brand = limited(body.brand, 160), email = limited(body.email, 254), service = limited(body.service, 100), budget = limited(body.budget, 80), details = limited(body.details, 5000);
    if (!name || !brand || !email || !service || !details) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    if (!emailPattern.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (name.length < 2 || brand.length < 2 || details.length < 10) return NextResponse.json({ error: "Please add a little more detail so Mia can respond." }, { status: 400 });
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "ugcmia.collab@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [recipient], reply_to: email, subject: `Portfolio inquiry from ${name} · ${brand}`, text: `Name: ${name}\nBrand: ${brand}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || "Not specified"}\n\nProject details:\n${details}` }) });
    if (!response.ok) return NextResponse.json({ error: "Email delivery failed. Please try again or email Mia directly." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch { return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 }); }
}
