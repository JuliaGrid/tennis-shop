import Link from "next/link";
import classes from "./styles.module.css";
import { rackets } from "../../public/mocks/mocks";
import { RacketItem } from "@/containers/racketItem";

export default function Home() {
  const reacketsList = rackets.slice(0, 3);

  return (
    <main>
      <div className={classes.carousel__header}>
        <h2 className={classes.carousel__title}>Ракетки</h2>
        <Link href="/rackets">Все</Link>
      </div>
      <ul className={classes.carousel__list}>
        {reacketsList.map((item) => (
          <li key={item.id}>
            <RacketItem
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
