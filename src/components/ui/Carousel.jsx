// components/Carousel.js
import { API_IMAGE_BASE_URL } from "@/constants";
import { cn } from "@/utils";
import Image from "next/image";
import { useState } from "react";

export const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass("slide-prev");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
      setAnimationClass("");
      setIsAnimating(false);
    }, 500);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationClass("slide-next");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      setAnimationClass("");
      setIsAnimating(false);
    }, 500);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = 0; i < 3; i++) {
      visibleItems.push(items[(currentIndex + i) % items.length]);
    }
    return visibleItems;
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="flex items-center justify-center space-x-4 overflow-hidden">
        {getVisibleItems().map((item, index) => {
          const isCenter = index === 1;
          const isPrev = index === 0;
          const isNext = index === 2;

          return (
            <div
              key={index}
              className={cn(
                "transition-transform duration-200 ease-in-out",
                animationClass,
                {
                  "transform scale-110 z-20": isCenter,
                  "transform scale-90 z-10 opacity-50": !isCenter,
                  "translate-x-1/2": isPrev,
                  "-translate-x-1/2": isNext,
                }
              )}
              style={{ order: isCenter ? "1" : isPrev ? "0" : "2" }}
            >
              <Image
                src={`${API_IMAGE_BASE_URL.medium}/${item}`}
                alt={`Slide ${index}`}
                width={120}
                height={90}
                className="rounded-lg shadow-md"
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        Next
      </button>
    </div>
  );
};
