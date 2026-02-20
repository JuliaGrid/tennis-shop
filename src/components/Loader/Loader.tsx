import classes from "./Loader.module.css";

export function Loader() {
  return (
    <div className={classes.loader__wrapper}>
      <span className={classes.loader}></span>
    </div>
  );
}
