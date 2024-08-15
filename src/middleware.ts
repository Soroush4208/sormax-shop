import { NextRequest } from "next/dist/server/web/spec-extension/request";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

export const middleware = function (request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get("accessToken");
  const role = request.cookies.get("role")?.value;
  const access = request.cookies.get("access");

  if (pathname.startsWith("/login")) {
    if (accessToken && role === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else if (accessToken && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (pathname.startsWith("/dashboard")) {
    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (accessToken && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (pathname.startsWith("/checkout")) {
    if (!access) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (!accessToken || !access) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (pathname.startsWith("/payment")) {
    if (!access) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (!accessToken || !access) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (pathname.startsWith("/payment/successful-result")) {
    if (!access) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (!accessToken || !access) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (pathname.startsWith("/payment/unsuccessful-result")) {
    if (!access) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (!accessToken || !access) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (pathname.startsWith("/account")) {
    if (!access) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else if (!accessToken || !access) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
};

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/payment",
    "/checkout",
    "/payment/unsuccessful-result",
    "/payment/successful-result",
    "/account",
  ],
};
