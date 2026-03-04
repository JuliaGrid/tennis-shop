import { Loader } from "../Loader/Loader";
import classes from "./ButtonWithLoader.module.css";

interface IButtonWithLoader {
  isPending?: boolean;
  text: string;
  onClick?: () => void;
}

export function ButtonWithLoader(props: IButtonWithLoader) {
  const { isPending, text, onClick } = props;

  return (
    <button className={classes.button} disabled={isPending} onClick={onClick}>
      {isPending ? <Loader size={24} /> : text}
    </button>
  );
}
