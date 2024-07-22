"use client";

import { generateCarouselSettings } from "@/utils";
import { useMemo } from "react";
import { Carousel, MediaCard } from "..";

export const MediaCarousel = ({ medias = [] }) => {
  const settings = useMemo(
    () =>
      generateCarouselSettings({
        slidesToShow: 7,
        slidesToScroll: 5,
        breakpoint_1024_slidesToShow: 6,
        breakpoint_768_slidesToShow: 6,
        breakpoint_640_slidesToShow: 5,
        breakpoint_480_slidesToShow: 3,
      }),
    []
  );

  return (
    <Carousel options={settings}>
      {medias.map((media) => (
        <div
          key={media.title}
          className="group rounded-lg border border-tcborder"
        >
          <MediaCard
            cardClass="h-40 md:!h-44 lg:!h-52 xl:!h-56"
            item={media}
            showTitle={false}
          />
        </div>
      ))}
    </Carousel>
  );
};
