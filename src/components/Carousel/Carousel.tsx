"use client";

import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.css";
import { RacketItem } from "@/containers/RacketItem";
import { IRacket } from "@/types/Racket";

interface ICarousel {
  rackets?: IRacket[];
}

export function Carousel(props: ICarousel) {
  const { rackets } = props;

  const swiperRef = useRef<SwiperType | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const startScroll = (direction: "next" | "prev") => {
    stopScroll();

    if (!swiperRef.current) return;

    // 1. Мгновенное пролистывание
    if (direction === "next") {
      swiperRef.current.slideNext();
    } else {
      swiperRef.current.slidePrev();
    }

    // 2. Далее уже интервал
    intervalRef.current = setInterval(() => {
      if (!swiperRef.current) return;

      if (direction === "next") {
        swiperRef.current.slideNext();
      } else {
        swiperRef.current.slidePrev();
      }
    }, 800);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className={classes.carousel}>
      <div
        className={classes.carousel__left}
        onMouseEnter={() => startScroll("prev")}
        onMouseLeave={stopScroll}
      />
      <div
        className={classes.carousel__right}
        onMouseEnter={() => startScroll("next")}
        onMouseLeave={stopScroll}
      />

      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoHeight={true}
      >
        {rackets?.map((item) => (
          <RacketItem key={item.id} {...item} />
        ))}
      </Swiper>
    </div>
  );
}
