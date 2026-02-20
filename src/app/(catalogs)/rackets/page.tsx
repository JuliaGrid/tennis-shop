import classes from "./styles.module.css";
import { Suspense } from "react";
import RacketsCatalog from "@/containers/RacketsCatalog/RacketsCatalog";
import { getRackets } from "@/services/get-rackets";
import { Loader } from "@/components/Loader/Loader";

export default function RacketsPage() {
  return (
    <>
      <h2 className={classes.rackets__title}>Ракетки</h2>
      <Suspense fallback={<Loader />}>
        <RacketsCatalog apiRequest={getRackets} />
      </Suspense>
    </>
  );
}
