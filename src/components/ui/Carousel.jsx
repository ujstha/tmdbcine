/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import { baseSettings } from "@/utils/carouselSettings";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../app/carousel.css";

export const Carousel = ({ children, options }) => {
  const settings = options ? { ...options } : { ...baseSettings };

  return <Slider {...settings}>{children}</Slider>;
};
