import Link from "next/link";
import classes from "./styles.module.css";

interface IRacketItem {
  id: number;
  imageUrl: string;
  name: string;
}

export function RacketItem(props: IRacketItem) {
  const { id, imageUrl, name } = props;

  return (
    <Link href={`/racket/${String(id)}`} className={classes.racket}>
      <img src={imageUrl} />
      <p>{name}</p>
    </Link>
  );
}
