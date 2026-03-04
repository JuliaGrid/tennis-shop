import { getRacketById } from "@/services/racket-by-id/get-racket-by-id";
import classes from "./RacketContainer.module.css";
import { notFound } from "next/navigation";
import { RacketImage } from "@/components/RacketImage/RacketImage";
import { FavoriteButton } from "@/containers/FavoriteButton/FavoriteButton";

interface IRacketContainer {
  id: number;
}

export async function RacketContainer(props: IRacketContainer) {
  const { id } = props;

  const response = await getRacketById(id);

  if (response?.isError) {
    return notFound();
  }

  const racket = response.data?.product;

  return (
    <section className={classes.racket}>
      <div className={classes.racket__info}>
        <p>{racket?.brand?.name}</p>
        <h2>{racket?.model}</h2>
        <p>{racket?.description}</p>
      </div>
      <div className={classes.racket__img}>
        <RacketImage imageUrl={racket?.imageUrl} alt={racket?.model} />
        <FavoriteButton isFavorite={racket?.userData.isFavorite} id={id} />
      </div>
      <strong className={classes.racket__price}>€ {racket?.price}</strong>
    </section>
  );
}
