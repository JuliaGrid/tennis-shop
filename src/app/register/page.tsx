"use client";

import { useActionState, useEffect } from "react";
import { registerAction } from "./registerAction";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/containers/AuthForm/AuthForm";

export default function Register() {
  const [{ error, isRedirect }, action, isPending] = useActionState(
    registerAction,
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
      <AuthForm
        error={error}
        isPending={isPending}
        action={action}
        isRegisterForm
      />
    </section>
  );
}
