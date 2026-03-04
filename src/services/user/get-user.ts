import { IUser } from "@/types/Racket";
import { IResponse } from "@/types/Request";
import { apiRequest } from "../api-request";

export const getUser = async (): Promise<IResponse<{ user: IUser }>> => {
  return await apiRequest({ url: `/auth/user` });
};
