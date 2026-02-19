import { BASE_API_URL } from "@/constants/service";
import { IRacket } from "@/types/Racket";

interface Response<T> {
  isError: boolean;
  data?: T;
}

export const getRackets = async (): Promise<Response<IRacket[]>> => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(`${BASE_API_URL}/api/products`);

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
