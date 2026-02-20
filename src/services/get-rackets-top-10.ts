import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";

export const getRacketsTop10 = async (): Promise<IResponse<IRacket[]>> => {
  try {
    const response = await fetch(`${BASE_API_URL}/top-10`);

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
