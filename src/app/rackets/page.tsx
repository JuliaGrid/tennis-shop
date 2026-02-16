import { RacketItem } from "@/container/racketItem";
import classes from "./styles.module.css";
import { rackets } from "../../../public/mocks/mocks";

export default function RacketsPage() {
  const reacketsList = rackets.slice(0, 3);

  return (
    <main className={classes.rackets}>
      <aside className={classes.rackets__filters}>
        <div className={classes.rackets__brandsWrapper}>
          <h4 className={classes.rackets__brandsTitle}>Бренд</h4>
          <ul className={classes.rackets__filterList}>
            <li className={classes.rackets__filterItem}>All</li>
            <li className={classes.rackets__filterItem}>Head</li>
            <li className={classes.rackets__filterItem}>Yonex</li>
          </ul>
        </div>
      </aside>

      <div className={classes.rackets__catalog}>
        <h2 className={classes.rackets__title}>Ракетки</h2>
        <ul className={classes.rackets__list}>
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
      </div>
    </main>
  );
}
