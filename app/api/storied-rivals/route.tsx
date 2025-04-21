import { NextRequest, NextResponse } from "next/server";
import { getStoriedRivals } from "@/services/google";
export async function GET(request: NextRequest) {
  try {
    const data = await getStoriedRivals();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching storied rivals:", error);
    return NextResponse.json(
      { error: "Failed to fetch storied rivals" },
      { status: 500 }
    );
  }
}
