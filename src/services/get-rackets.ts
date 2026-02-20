import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

export const getRackets = async (
  page = 1,
  limit = 10,
): Promise<IResponse<IRacket[]>> => {
  //   await new Promise((resolve) => setTimeout(resolve, 15000));
  try {
    const response = await fetch(
      `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
    );

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
