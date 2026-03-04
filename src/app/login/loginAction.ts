import { authLogin } from "@/services/auth/auth-login";

export async function loginAction(
  prevState: { error?: string; isRedirect?: boolean },
  formData: FormData,
) {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!login || !password) {
    return { error: "Заполните все поля", isRedirect: false };
  }

  const { error } = await authLogin(login, password);

  if (error) {
    return { error, isRedirect: false };
  }

  return { isRedirect: true };
}
