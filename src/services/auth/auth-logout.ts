import { BASE_API_URL } from "@/constants/service";

export const authLogout = async (): Promise<{ error: string }> => {
  try {
    const response = await fetch(`${BASE_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      return { error: "" };
    } else {
      return { error: "Неверный логин или пароль" };
    }
  } catch (e) {
    console.log("Error", e);
    return { error: "Problem with server" };
  }
};
