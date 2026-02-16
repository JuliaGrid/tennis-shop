import classes from "./styles.module.css";
import { NavigationMenu } from "./navigationMenu";

export function Header() {
  return (
    <div className={classes.header}>
      <div />
      <h1 className={classes.header__title}>Tennis shop</h1>
      <NavigationMenu />
    </div>
  );
}
