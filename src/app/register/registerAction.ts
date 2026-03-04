import { authRegister } from "@/services/auth/auth-register";

export async function registerAction(
  prevState: { error?: string; isRedirect?: boolean },
  formData: FormData,
) {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!login || !password) {
    return { error: "Заполните все поля", isRedirect: false };
  }

  const { error } = await authRegister(login, password);

  if (error) {
    return { error, isRedirect: false };
  }

  return { isRedirect: true };
}
