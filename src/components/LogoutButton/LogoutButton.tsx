"use client";

import { authLogout } from "@/services/auth-logout";
import { useTransition } from "react";
import { Loader } from "../Loader/Loader";

export function LogoutButton() {
  const [isPending, startPending] = useTransition();

  const logout = async () => {
    await authLogout();
    location.assign("/");
  };

  return (
    <button onClick={() => startPending(logout)} disabled={isPending}>
      {isPending ? <Loader size={24} /> : "Выйти"}
    </button>
  );
}
