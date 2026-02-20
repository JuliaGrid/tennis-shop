import classes from "./styles.module.css";
import { Suspense } from "react";
import RacketsCatalog from "@/containers/RacketsCatalog/RacketsCatalog";
import { getRacketsTop10 } from "@/services/get-rackets-top-10";

export default function TopPage() {
  return (
    <>
      <h2 className={classes.rackets__title}>Ракетки</h2>
      <Suspense fallback={<div>Loading</div>}>
        <RacketsCatalog apiRequest={getRacketsTop10} />
      </Suspense>
    </>
  );
}
