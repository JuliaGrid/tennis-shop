import Link from "next/link";
import classes from "./styles.module.css";
import { RacketImage } from "@/components/racketImage";
import { ROUTES } from "@/constants/routes";

interface IRacketItem {
  id: number;
  imageUrl: string;
  name: string;
}

export function RacketItem(props: IRacketItem) {
  const { id, imageUrl, name } = props;

  return (
    <Link href={ROUTES.racket(id)} className={classes.racket}>
      <RacketImage imageUrl={imageUrl} alt={name} />
      <p className={classes.racket__name}>{name}</p>
    </Link>
  );
}
