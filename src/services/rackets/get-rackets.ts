import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const getRackets = async (
  page = 1,
  limit = 10,
): Promise<IResponse<IRacket[]>> => {
  return await apiRequest({
    url: `/products?page=${page}&limit=${limit}`,
  });
};
