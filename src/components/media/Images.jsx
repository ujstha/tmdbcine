/* eslint-disable camelcase */
"use client";

import { generateCarouselSettings, getImageUrl } from "@/utils";
import { useMemo } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { CardImage, Carousel } from "..";

export const Images = ({ images = [], show = "all" }) => {
  const loadedImages =
    show === "all" ? images.slice(0, 50) : images.slice(0, 20);

  const settings = useMemo(
    () =>
      generateCarouselSettings({
        slidesToShow: 4,
        slidesToScroll: 4,
        breakpoint_1024_slidesToShow: 3,
        breakpoint_768_slidesToShow: 3,
        breakpoint_640_slidesToShow: 2,
        breakpoint_480_slidesToShow: 2,
      }),
    []
  );

  const renderImages = (file_path) => {
    return (
      <PhotoView key={file_path} src={getImageUrl(file_path, "original")}>
        <div className="relative h-36 overflow-hidden rounded-lg md:h-40">
          <CardImage
            src={file_path}
            title={file_path}
            className="cursor-pointer rounded-lg hover:scale-110"
          />
        </div>
      </PhotoView>
    );
  };

  if (show === "all") {
    return (
      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <PhotoProvider>
          {loadedImages.map(({ file_path }) => renderImages(file_path))}
        </PhotoProvider>
      </div>
    );
  }

  return (
    <PhotoProvider>
      <Carousel options={settings}>
        {loadedImages.map(({ file_path }) => renderImages(file_path))}
      </Carousel>
    </PhotoProvider>
  );
};
