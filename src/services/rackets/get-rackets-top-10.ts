import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const getRacketsTop10 = async (): Promise<IResponse<IRacket[]>> => {
  return await apiRequest({ url: `/top-10`, tags: ["getRacketsTop10"] });
};
