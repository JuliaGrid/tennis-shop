import classes from "./styles.module.css";

export default function Login() {
  return (
    <section className={classes.login}>
      <form className={classes.login__form}>
        <h2 className={classes.login__title}>Форма входа</h2>
        <div>
          <label className={classes.login__label} htmlFor="login">
            Логин
          </label>
          <input
            className={classes.login__input}
            type="text"
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
            id="password"
          ></input>
        </div>
      </form>
    </section>
  );
}
