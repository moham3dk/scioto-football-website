import { NextRequest, NextResponse } from "next/server";
import { getSponsors } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const sponsors = await getSponsors();
    return NextResponse.json(sponsors);
  } catch (error) {
    console.error("Error fetching sponsors:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
