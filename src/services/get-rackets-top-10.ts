import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { cookies } from "next/headers";

export const getRacketsTop10 = async (): Promise<IResponse<IRacket[]>> => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/top-10`, {
      next: {
        tags: ["getRacketsTop10"],
      },
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (response.ok) {
      const json = await response.json();
      return { isError: false, data: json };
    } else {
      return { isError: true, data: undefined };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true, data: undefined };
  }
};
