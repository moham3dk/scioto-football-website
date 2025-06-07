import { NextRequest, NextResponse } from "next/server";
import { getJVSched } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const jvSched = await getJVSched();

    const currentYear = new Date().getFullYear().toString();
    const allRows = jvSched.values || [];

    const filteredRows = allRows.filter((row: any[]) => row[5]?.toString() === currentYear);

    return NextResponse.json({ values: filteredRows });
  } catch (error: any) {
    console.error("Error fetching jv schedule data:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
