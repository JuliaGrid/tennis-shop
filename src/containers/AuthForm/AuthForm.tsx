import { FormInput } from "@/components/FormInput/FormInput";
import { Loader } from "@/components/Loader/Loader";
import classes from "./AuthForm.module.css";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { ButtonWithLoader } from "@/components/ButtonWithLoader/ButtonWithLoader";

interface IAuthForm {
  action: (payload: FormData) => void;
  error?: string;
  isPending?: boolean;
  isRegisterForm?: boolean;
}

export function AuthForm(props: IAuthForm) {
  const { action, error, isPending, isRegisterForm } = props;

  return (
    <form className={classes.authForm__form} action={action}>
      <h2 className={classes.authForm__title}>
        Форма {isRegisterForm ? "регистрации" : "входа"}
      </h2>
      <FormInput id="login" name="login" type="text" label="Логин" />
      <FormInput id="password" name="password" type="password" label="Пароль" />

      {isRegisterForm ? (
        <p>
          Уже зарегестрированы?{" "}
          <Link className={classes.authForm__link} href={ROUTES.login}>
            Войти
          </Link>
        </p>
      ) : (
        <p>
          Еще не зарегестрированы?{" "}
          <Link className={classes.authForm__link} href={ROUTES.register}>
            Зарегистрироваться
          </Link>
        </p>
      )}

      {error && <div className={classes.authForm__error}>{error}</div>}

      <ButtonWithLoader
        text={isRegisterForm ? "Зарегистрироваться" : "Войти"}
        isPending={isPending}
      />
    </form>
  );
}
