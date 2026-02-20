import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

export const getRacketById = async (
  id: string,
): Promise<IResponse<{ product: IRacket }>> => {
  try {
    const response = await fetch(`${BASE_API_URL}/product/${id}`);

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
