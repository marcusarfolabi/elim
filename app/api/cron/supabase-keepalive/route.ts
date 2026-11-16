import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    console.error("CRON_SECRET is not configured for the Supabase keepalive.");
    return NextResponse.json(
      { error: "Keepalive is not configured." },
      { status: 500 },
    );
  }

  if (request.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = createClient();
  const { error } = await supabase.from("testimonies").select("id").limit(1);
  if (error) {
    console.error("Supabase keepalive query failed:", error.message);
    return NextResponse.json(
      { error: "Supabase health check failed." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
