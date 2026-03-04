import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const getRacketById = async (
  id: number,
): Promise<IResponse<{ product: IRacket }>> => {
  return await apiRequest({ url: `/product/${id}` });
};
