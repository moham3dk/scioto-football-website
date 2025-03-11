import { NextRequest, NextResponse } from "next/server";
import { getRoster } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const roster = await getRoster();
    return NextResponse.json(roster);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
