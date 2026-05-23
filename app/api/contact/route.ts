import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    /* =========================
       SUPABASE
    ========================== */
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    /* =========================
       SAVE TO DATABASE
    ========================== */
    const { error } = await supabase
      .from("contact_leads")
      .insert([
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
        {
          error: error.message,
        },
        {
          status: 500,
        }
      );
    }

    /* =========================
       SEND EMAIL
    ========================== */
    await resend.emails.send({
      from: "Redline VFX <info@redlinevfx.com>",

      to: "info@redlinevfx.com",

      subject: `New Lead: ${body.name}`,

      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>New Contact Lead</h2>

          <p><strong>Name:</strong> ${body.name}</p>

          <p><strong>Email:</strong> ${body.email}</p>

          <p>
            <strong>Phone:</strong>
            ${body.country_code} ${body.phone}
          </p>

          <p><strong>Plan:</strong> ${body.plan || "N/A"}</p>

          <p>
            <strong>Mix Match:</strong>
            ${body.mix_match || "N/A"}
          </p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${body.message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      {
        error: err.message || "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}