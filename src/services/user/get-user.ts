import { BASE_API_URL } from "@/constants/service";
import { IUser } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { cookies } from "next/headers";

export const getUser = async (): Promise<IResponse<{ user: IUser }>> => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/auth/user`, {
      credentials: "include",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (response.ok) {
      const json = await response.json();
      return { isError: false, data: json };
    } else {
      console.log("Status:", response.status, response.statusText);
      return { isError: true, data: undefined };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true, data: undefined };
  }
};
