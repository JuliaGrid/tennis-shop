"use client";

import { authLogout } from "@/services/auth-logout";

export function LogoutButton() {
  const logout = async () => {
    await authLogout();
    location.assign("/");
  };

  return <button onClick={logout}>Выйти</button>;
}
