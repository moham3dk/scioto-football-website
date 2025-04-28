import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/middleware/logger";

export function middleware(req: NextRequest) {
  logger(req);

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
