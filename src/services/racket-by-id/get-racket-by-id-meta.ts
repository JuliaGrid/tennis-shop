import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const getRacketByIdMeta = async (
  id: string,
): Promise<IResponse<IRacket>> => {
  return await apiRequest({ url: `/meta/product/${id}` });
};
