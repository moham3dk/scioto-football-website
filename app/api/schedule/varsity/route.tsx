import { NextRequest, NextResponse } from "next/server";
import { getVarsitySched } from "@/services/google";

export async function GET(request: NextRequest) {
  try {
    const varsitySched = await getVarsitySched();

    const currentYear = new Date().getFullYear().toString();
    const allRows = varsitySched.values || [];

    const filteredRows = allRows.filter((row: any[]) => row[5]?.toString() === currentYear);

    return NextResponse.json({ values: filteredRows });
  } catch (error: any) {
    console.error("Error fetching varsity schedule data:", {
      message: error.message,
      stack: error.stack,
    });
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
