"use client";

import classes from "./styles.module.css";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import Link from "next/link";

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={classes.header__list}>
        <li
          className={classnames(classes.header__item, {
            [classes.header__itemActive]: pathname === "/",
          })}
        >
          <Link href="/">Главная</Link>
        </li>
        <li
          className={classnames(classes.header__item, {
            [classes.header__itemActive]: pathname === "/rackets",
          })}
        >
          <Link href="/rackets">Ракетки</Link>
        </li>
      </ul>
    </nav>
  );
}
