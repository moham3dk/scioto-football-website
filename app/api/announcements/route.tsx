import { NextRequest, NextResponse } from "next/server";
import { getAnnouncements } from "@/services/google";
import { limiter } from "@/middleware/rateLimiter";

export async function GET(request: NextRequest) {
  const rateLimitResponse = await limiter(request, new NextResponse());

  if (rateLimitResponse) {
    return rateLimitResponse;
  }

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
