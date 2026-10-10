import { NextResponse } from "next/server";
import { auth } from "./app/lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    const signInUrl = new URL("/SignIn", request.url);

    signInUrl.searchParams.set("reason", "product-auth");
    signInUrl.searchParams.set(
      "redirect",
      request.nextUrl.pathname
    );

    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/product/:path*"],
};