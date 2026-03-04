"use server";

import { BASE_API_URL } from "@/constants/service";
import { IResponse } from "@/types/Request";
import { cookies } from "next/headers";

export const apiRequest = async <T>({
  url,
  method,
  tags,
}: {
  url: string;
  method?: string;
  tags?: string[];
}): Promise<IResponse<T>> => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/${url}`, {
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
      method: method ? method : undefined,
      next: tags ? { tags: tags } : undefined,
    });

    if (response.ok) {
      let data;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }
      return { isError: false, data };
    } else {
      return { isError: true, data: undefined };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true, data: undefined };
  }
};
