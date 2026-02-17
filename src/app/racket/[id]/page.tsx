import { FC } from "react";
import classes from "./styles.module.css";
import { rackets } from "../../../../public/mocks/mocks";
import { RacketImage } from "@/components/RackImage";

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const RacketPage: FC<PageProps<"/racket/[id]">> = async ({ params }) => {
  const { id } = await params;

  const racket = rackets.find((item) => item.id === +id);

  if (!racket) {
    return <div>Ракетка не найдена</div>;
  }

  const { brand, model, description, imageUrl, price } = racket;
  console.log(racket);

  return (
    <div className={classes.racket}>
      <div className={classes.racket__info}>
        <p>{brand?.name}</p>
        <h2>{model}</h2>
        <p>{description}</p>
      </div>
      <RacketImage imageUrl={imageUrl} alt={model} />
      <strong className={classes.racket__price}>€ {price}</strong>
    </div>
  );
};

export default RacketPage;
