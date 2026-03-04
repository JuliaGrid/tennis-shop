import Link from "next/link";
import classes from "./RacketItem.module.css";
import { RacketImage } from "@/components/RacketImage/RacketImage";
import { ROUTES } from "@/constants/routes";
import { FavoriteButton } from "../../containers/FavoriteButton/FavoriteButton";
import { IRacket } from "@/types/Racket";

export function RacketItem(props: IRacket) {
  const { id, imageUrl, name, userData } = props;

  return (
    <div className={classes.racket}>
      <Link href={ROUTES.racket(id)} className={classes.racket__link}>
        <RacketImage imageUrl={imageUrl} alt={name} />
        <p className={classes.racket__name}>{name}</p>
      </Link>
      <FavoriteButton isFavorite={userData?.isFavorite} id={id} />
    </div>
  );
}
