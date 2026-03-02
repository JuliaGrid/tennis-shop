"use server";

import { BASE_API_URL } from "@/constants/service";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const authLogin = async (
  login: string,
  password: string,
): Promise<{ error: string }> => {
  try {
    const response = await fetch(`${BASE_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log("res", response);

    if (response.ok) {
      const cookiesStore = await cookies();
      const setCookieHeaders = response.headers.getSetCookie();

      if (setCookieHeaders) {
        for (const header of setCookieHeaders) {
          const parsed = parseSetCookie(header);

          if (!parsed) continue;

          const cookiesArray = Array.isArray(parsed) ? parsed : [parsed];

          for (const cookie of cookiesArray) {
            cookiesStore.set(cookie.name, cookie.value, cookie.options);
          }
        }
      }
      return { error: "" };
    } else {
      return { error: "invalid login or password" };
    }
  } catch (e) {
    console.log("Error", e);
    return { error: "Problem with server" };
  }
};
