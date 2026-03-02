"use client";

import classes from "./Header.module.css";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { NavigationLink } from "@/components/NavigationLink/NavigationLink";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

export function Header() {
  const isLogged = useContext(AuthContext);

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
          </ul>
        </nav>
      </div>
    </header>
  );
}
