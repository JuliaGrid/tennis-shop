import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
// import { cookies } from "next/headers";

export const addFavorite = async (
  id: number,
): Promise<IResponse<IRacket[]>> => {
  try {
    // const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/product/${id}/favorite`, {
      method: "POST",
      credentials: "include",
      //   headers: {
      //     Cookie: cookieStore.toString(),
      //   },
    });

    if (response.ok) {
      // const json = await response.json();
      return { isError: false };
    } else {
      return { isError: true };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true };
  }
};
