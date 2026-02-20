import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

export const getRacketById = async (
  id: string,
): Promise<IResponse<{ product: IRacket }>> => {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  try {
    const response = await fetch(`${BASE_API_URL}/product/${id}`);

    console.log("response", response);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return { isError: false, data: json };
    } else {
      return { isError: true, data: undefined };
    }
  } catch (e) {
    console.log("Error", e);
    return { isError: true, data: undefined };
  }
};
