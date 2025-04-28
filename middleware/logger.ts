// middleware/logger.ts
import { NextRequest, NextResponse } from 'next/server';

export function logger(req: NextRequest) {
  const { method, url } = req;

  const ip = req.headers.get('x-forwarded-for') || 'Unknown IP';

  console.log(`[${new Date().toISOString()}] ${method} ${url} - IP: ${ip}`);

  return NextResponse.next();
}
