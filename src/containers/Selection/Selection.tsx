import Link from "next/link";
import classes from "./Selection.module.css";
import { Suspense } from "react";
import RacketsCarousel from "../RacketsCarousel/RacketsCarousel";
import { IResponse } from "@/types/Request";
import { IRacket } from "@/types/Racket";

interface ISelection {
  title: string;
  routeToAll: string;
  apiRequest: () => Promise<IResponse<IRacket[]>>;
}

export function Selection(props: ISelection) {
  const { title, routeToAll, apiRequest } = props;

  return (
    <div className={classes.selection}>
      <div className={classes.selection__header}>
        <h2 className={classes.selection__title}>{title}</h2>
        <Link href={routeToAll} className={classes.selection__all}>
          Все
        </Link>
      </div>

      <Suspense fallback={<div>loading</div>}>
        <RacketsCarousel apiRequest={apiRequest} />
      </Suspense>
    </div>
  );
}
