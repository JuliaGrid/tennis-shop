"use client";

import { IUser } from "@/types/Racket";
import { createContext, ReactNode } from "react";

interface IUserContext {
  children: ReactNode;
  user?: IUser;
}

export const UserContext = createContext<IUser | undefined>(undefined);

export function UserProvider(props: IUserContext) {
  const { children, user } = props;
  return <UserContext value={user}>{children}</UserContext>;
}
