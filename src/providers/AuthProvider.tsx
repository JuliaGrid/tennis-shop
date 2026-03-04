"use client";

import { createContext, ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  isLogged: false,
});

interface AuthProviderProps {
  children: ReactNode;
  isLogged: boolean;
}

export function AuthProvider({ children, isLogged }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
}
