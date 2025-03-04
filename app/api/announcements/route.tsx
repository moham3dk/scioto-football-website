import { NextRequest, NextResponse } from "next/server";
import { getAnnouncements } from "@/services/google";
export async function GET(request: NextRequest) {
  try {
    const announcements = await getAnnouncements();
    return NextResponse.json(announcements);
  } catch (error: any) {
    console.log("Error fetching announcements:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
