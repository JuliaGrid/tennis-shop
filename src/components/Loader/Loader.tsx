import classes from "./Loader.module.css";

interface ILoader {
  size?: number;
}

export function Loader(props: ILoader) {
  const { size } = props;
  return (
    <div
      className={classes.loader__wrapper}
      style={{ width: size ?? 48, height: size ?? 48 }}
    >
      <span className={classes.loader}></span>
    </div>
  );
}
