"use client";

import classes from "./Header.module.css";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import { useContext } from "react";
import { UserContext } from "@/providers/UserProvider";

export function Header() {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <header className={classes.header}>
      <div className={classes.header__wrapper}>
        <h1 className={classes.header__title}>
          <Link href={ROUTES.home}>Tennis store</Link>
        </h1>

        <nav>
          <ul className={classes.header__list}>
            <li className={classes.header__item}>
              <NavigationLink route={ROUTES.home}>Главная</NavigationLink>
            </li>
            <li className={classes.header__item}>
              <NavigationLink route={ROUTES.rackets}>Ракетки</NavigationLink>
            </li>
            <li className={classes.header__item}>
              {user ? (
                <NavigationLink route={ROUTES.rackets}>Профиль</NavigationLink>
              ) : (
                <NavigationLink route={ROUTES.rackets}>Вход</NavigationLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
