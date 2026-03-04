import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

export const getRacketByIdMeta = async (
  id: string,
): Promise<IResponse<IRacket>> => {
  try {
    const response = await fetch(`${BASE_API_URL}/meta/product/${id}`);

    if (response.ok) {
      const data = await response.json();
      return { isError: false, data: data.product };
    } else {
      return { isError: true, data: undefined };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true, data: undefined };
  }
};
