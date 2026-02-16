import { FC } from "react";
import classes from "./styles.module.css";
import { rackets } from "../../../../public/mocks/mocks";

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
    <main className={classes.racket}>
      <div className={classes.racket__info}>
        <p>{brand?.name}</p>
        <h2>{model}</h2>
        <p>{description}</p>
      </div>
      <img src={imageUrl} className={classes.racket__img} width={200} />
      <strong className={classes.racket__price}>{price}</strong>
    </main>
  );
};

export default RacketPage;
