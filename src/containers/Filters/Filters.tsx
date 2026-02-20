import classes from "./Filters.module.css";

export function Filters() {
  return (
    <div className={classes.filters}>
      <h4 className={classes.filters__title}>Бренд</h4>
      <ul className={classes.filters__list}>
        <li className={classes.filters__item}>All</li>
        <li className={classes.filters__item}>Head</li>
        <li className={classes.filters__item}>Yonex</li>
      </ul>
    </div>
  );
}
