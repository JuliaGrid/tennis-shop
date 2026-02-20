import { getRacketById } from "@/services/get-racket-by-id";
import classes from "./RacketContainer.module.css";
import { notFound } from "next/navigation";
import { RacketImage } from "@/components/RacketImage/RacketImage";

interface IRacketContainer {
  id: string;
}

export async function RacketContainer(props: IRacketContainer) {
  const { id } = props;

  const response = await getRacketById(id);

  if (response?.isError) {
    return notFound();
  }

  const racket = response.data?.product;

  console.log("response.data", response.data);

  return (
    <section className={classes.racket}>
      <div className={classes.racket__info}>
        <p>{racket?.brand?.name}</p>
        <h2>{racket?.model}</h2>
        <p>{racket?.description}</p>
      </div>
      <RacketImage imageUrl={racket?.imageUrl} alt={racket?.model} />
      <strong className={classes.racket__price}>€ {racket?.price}</strong>
    </section>
  );
}
