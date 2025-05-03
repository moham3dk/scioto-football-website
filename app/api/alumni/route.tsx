import { NextRequest, NextResponse } from "next/server";
import { getAlumni } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const alumni = await getAlumni();
    return NextResponse.json(alumni);
  } catch (error) {
    console.error("Error fetching alumni data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
