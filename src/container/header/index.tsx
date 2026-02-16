"use client";

import Link from "next/link";
import classes from "./styles.module.css";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export function Header() {
  const pathname = usePathname();

  return (
    <div className={classes.header}>
      <div />
      <h1 className={classes.header__title}>Tennis shop</h1>
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
    </div>
  );
}
