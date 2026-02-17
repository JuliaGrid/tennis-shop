import classes from "./styles.module.css";
import { NavigationMenu } from "./navigationMenu";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__wrapper}>
        <h1 className={classes.header__title}>
          <Link href={ROUTES.home}>Tennis store</Link>
        </h1>
        <NavigationMenu />
      </div>
    </div>
  );
}
