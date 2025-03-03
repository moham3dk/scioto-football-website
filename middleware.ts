import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    
    // all middleware will go here
  console.log("Middleware called");
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
