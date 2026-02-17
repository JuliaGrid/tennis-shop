"use client";

import classes from "./styles.module.css";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={classes.header__list}>
        <li
          className={classnames(classes.header__item, {
            [classes.header__itemActive]: pathname === ROUTES.home,
          })}
        >
          <Link href={ROUTES.home}>Главная</Link>
        </li>
        <li
          className={classnames(classes.header__item, {
            [classes.header__itemActive]: pathname === ROUTES.rackets,
          })}
        >
          <Link href={ROUTES.rackets}>Ракетки</Link>
        </li>
      </ul>
    </nav>
  );
}
