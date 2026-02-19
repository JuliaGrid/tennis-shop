import Link from "next/link";
import classes from "./styles.module.css";
import { ROUTES } from "@/constants/routes";

import "swiper/css";
import RacketsCarousel from "@/containers/RacketsCarousel/RacketsCarousel";
import { getRackets } from "@/services/get-rackets";
import { Suspense } from "react";

export default function Home() {
  return (
    <section className={classes.carousel}>
      <div className={classes.carousel__header}>
        <h2 className={classes.carousel__title}>Ракетки</h2>
        <Link href={ROUTES.rackets} className={classes.carousel__all}>
          Все
        </Link>
      </div>

      <Suspense fallback={<div>loading</div>}>
        <RacketsCarousel apiRequest={getRackets} />
      </Suspense>
    </section>
  );
}
