import { NextRequest, NextResponse } from "next/server";
import { getFreshmanSched } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const freshmanSched = await getFreshmanSched();

    const currentYear = new Date().getFullYear().toString();
    const allRows = freshmanSched.values || [];

    const filteredRows = allRows.filter((row: any[]) => row[5]?.toString() === currentYear);

    return NextResponse.json({ values: filteredRows });
  } catch (error: any) {
    console.error("Error fetching freshman schedule data:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
