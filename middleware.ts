
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: any) {
  const token = request.cookies.get("admin_token")?.value;
  if (request.nextUrl.pathname.startsWith("/admin")) {
    if (!token) return NextResponse.redirect(new URL("/", request.url));
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
