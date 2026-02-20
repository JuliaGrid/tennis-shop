"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import classes from "./Carousel.module.css";
import { RacketItem } from "@/components/RacketItem/RacketItem";
import { IRacket } from "@/types/Racket";

interface ICarousel {
  rackets?: IRacket[];
}

export function Carousel(props: ICarousel) {
  const { rackets } = props;

  const swiperRef = useRef<SwiperType | null>(null);
  const intervalRef = useRef<number | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!swiperRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;

    const zoneWidth = rect.width * 0.15; // 15% от ширины контейнера
    const leftZone = rect.left + zoneWidth;
    const rightZone = rect.right - zoneWidth;

    // Определяем направление
    let direction: "next" | "prev" | null = null;
    if (x < leftZone) direction = "prev";
    else if (x > rightZone) direction = "next";
    else direction = null;

    // Если нет направления — остановка
    if (!direction) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Если интервал уже есть — не создаём новый
    if (intervalRef.current) return;

    if (direction === "next") swiperRef.current.slideNext();
    else swiperRef.current.slidePrev();

    // ⏱ дальше по интервалу
    intervalRef.current = window.setInterval(() => {
      if (!swiperRef.current) return;
      if (direction === "next") swiperRef.current.slideNext();
      else swiperRef.current.slidePrev();
    }, 500);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div
      className={classes.carousel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        style={{ paddingRight: "2px" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoHeight={true}
      >
        {rackets?.map((item) => (
          <SwiperSlide key={item.id}>
            <RacketItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
