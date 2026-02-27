"use client";

import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./Carousel.module.css";
import { RacketItem } from "@/components/RacketItem/RacketItem";
import { IRacket } from "@/types/Racket";

interface ICarousel {
  rackets?: IRacket[];
}

export function Carousel(props: ICarousel) {
  const { rackets } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const intervalRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!emblaApi) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX;

      const zoneWidth = rect.width * 0.15;
      const leftZone = rect.left + zoneWidth;
      const rightZone = rect.right - zoneWidth;

      let direction: "next" | "prev" | null = null;
      if (x < leftZone) direction = "prev";
      else if (x > rightZone) direction = "next";

      if (!direction) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        return;
      }

      if (intervalRef.current) return;

      if (direction === "next") emblaApi.scrollNext();
      else emblaApi.scrollPrev();

      intervalRef.current = window.setInterval(() => {
        if (!emblaApi) return;
        if (direction === "next") emblaApi.scrollNext();
        else emblaApi.scrollPrev();
      }, 500);
    },
    [emblaApi],
  );

  const handleMouseLeave = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  return (
    <div
      className={classes.carousel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.embla} ref={emblaRef}>
        <div className={classes.emblaContainer}>
          {rackets?.map((item) => (
            <div className={classes.emblaSlide} key={item.id}>
              <RacketItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
