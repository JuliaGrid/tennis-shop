"use client";

import { authLogout } from "@/services/auth/auth-logout";
import { useTransition } from "react";
import { ButtonWithLoader } from "../../components/ButtonWithLoader/ButtonWithLoader";

export function LogoutButton() {
  const [isPending, startPending] = useTransition();

  const logout = async () => {
    await authLogout();
    location.assign("/");
  };

  return (
    <ButtonWithLoader
      text="Выйти"
      isPending={isPending}
      onClick={() => startPending(logout)}
    />
  );
}
