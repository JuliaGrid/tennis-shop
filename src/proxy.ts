import { NextRequest, NextResponse } from "next/server";
import { getUser } from "./services/user/get-user";

export async function proxy(request: NextRequest) {
  const user = await getUser();

  if (!user.data) {
    return NextResponse.redirect(new URL("/403", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};
