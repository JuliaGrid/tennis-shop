"use client";

import { LogoutButton } from "@/containers/LogoutButton/LogoutButton";
import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";
import classes from "./styles.module.css";

export default function Profile() {
  const user = useContext(UserContext);

  return (
    <div className={classes.profile}>
      <h2 className={classes.profile__title}>Мой профиль</h2>

      <ul className={classes.profile__list}>
        <li className={classes.profile__item}>
          <strong className={classes.profile__label}>Имя:</strong>
          <p className={classes.profile__value}>{user?.login}</p>
        </li>
        <li className={classes.profile__item}>
          <strong className={classes.profile__label}>Роль:</strong>
          <p className={classes.profile__value}>
            {user?.isAdmin ? "Администратор" : "Обычный пользователь"}
          </p>
        </li>
      </ul>

      <LogoutButton />
    </div>
  );
}
