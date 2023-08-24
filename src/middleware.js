import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
export async function middleware(req) {
  const jwt = req.cookies.get("admin");

  if (req.nextUrl.pathname.startsWith("/Dashboard" || "/dashboardvendedor")) {
    if (!jwt) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (jwt) {
      const { payload } = await jwtVerify(
        jwt.value,
        new TextEncoder().encode("secret")
      );
      if (payload.type_user === "administrador")
        return NextResponse.redirect(new URL("/Dashboard/usuarios", req.url));
      if (payload.type_user === "vendedor")
        return NextResponse.redirect(
          new URL("/dashboardvendedor/productos", req.url)
        );
    }
  }

  return NextResponse.next();
}

/* export const config = {
  matcher: ["/Dashboard/:path*", "/dashboarvendedor/:path*", "/login"],
}; */
