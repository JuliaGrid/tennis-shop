import classes from "./styles.module.css";
import { ROUTES } from "@/constants/routes";
import { Selection } from "@/containers/Selection/Selection";
import { getRackets } from "@/services/get-rackets";
import { getRacketsTop10 } from "@/services/get-rackets-top-10";

export default function Home() {
  return (
    <>
      <section className={classes.home}>
        <Selection
          title="Ракетки"
          routeToAll={ROUTES.rackets}
          apiRequest={getRackets}
        />
        <Selection
          title="Топ-10"
          routeToAll={ROUTES.top}
          apiRequest={getRacketsTop10}
        />
      </section>
    </>
  );
}
