import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      return NextResponse.json(
        { error: "Missing Supabase environment variables" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, anonKey);

    // ✅ 1. Save to Supabase (your existing logic)
    const { error } = await supabase.from("contact_leads").insert([
      {
        name: body.name,
        email: body.email,
        country_code: body.country_code,
        phone: body.phone,
        plan: body.plan,
        mix_match: body.mix_match,
        message: body.message,
      },
    ]);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    // ✅ 2. Send Email via Titan SMTP (NEW ADDED PART)
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER, // info@redlinevfx.com
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Redline VFX Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Lead: ${body.name}`,
      html: `
        <h2>New Contact Lead Received</h2>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Phone:</b> ${body.country_code} ${body.phone}</p>
        <p><b>Plan:</b> ${body.plan}</p>
        <p><b>Mix Match:</b> ${body.mix_match}</p>
        <p><b>Message:</b> ${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}