"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "./loginAction";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/containers/AuthForm/AuthForm";

export default function Login() {
  const [{ error, isRedirect }, action, isPending] = useActionState(
    loginAction,
    {
      error: "",
      isRedirect: false,
    },
  );

  const router = useRouter();

  useEffect(() => {
    if (isRedirect) {
      location.assign("/");
    }
  }, [isRedirect, router]);

  return (
    <section>
      <AuthForm error={error} isPending={isPending} action={action} />
    </section>
  );
}
