import { RacketItem } from "@/components/RacketItem/RacketItem";
import classes from "./Catalog.module.css";
import { IRacket } from "@/types/Racket";

interface ICatalog {
  rackets?: IRacket[];
}

export function Catalog(props: ICatalog) {
  const { rackets } = props;

  return (
    <ul className={classes.catalog__list}>
      {rackets?.map((item) => (
        <li key={item.id}>
          <RacketItem id={item.id} imageUrl={item.imageUrl} name={item.name} />
        </li>
      ))}
    </ul>
  );
}
