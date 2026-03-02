"use client";

import { useActionState, useEffect } from "react";
import classes from "./styles.module.css";
import { loginAction } from "./loginAction";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader/Loader";

export default function Login() {
  const [{ error, isRedirect }, action, isPending] = useActionState(
    loginAction,
    {
      error: "",
      isRedirect: false,
    },
  );

  console.log("is", isPending);

  const router = useRouter();

  useEffect(() => {
    if (isRedirect) {
      router.push("/");
    }
  }, [isRedirect, router]);

  return (
    <section className={classes.login}>
      <form className={classes.login__form} action={action}>
        <h2 className={classes.login__title}>Форма входа</h2>
        <div>
          <label className={classes.login__label} htmlFor="login">
            Логин
          </label>
          <input
            className={classes.login__input}
            type="text"
            name="login"
            id="login"
          ></input>
        </div>

        <div>
          <label className={classes.login__label} htmlFor="password">
            Пароль
          </label>
          <input
            className={classes.login__input}
            type="password"
            name="password"
            id="password"
          ></input>
        </div>

        {error && <div className={classes.login__error}>{error}</div>}

        <button className={classes.login__button} disabled={isPending}>
          {isPending ? <Loader size={24} /> : "Войти"}
        </button>
      </form>
    </section>
  );
}
