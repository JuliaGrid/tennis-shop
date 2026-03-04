"use server";

import { IRacket } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const deleteFavorite = async (
  id: number,
): Promise<IResponse<IRacket[]>> => {
  return await apiRequest({
    url: `/product/${id}/favorite`,
    method: "DELETE",
  });
};
