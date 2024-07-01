"use client";

import { Skeleton } from "@/components";
import { HEART_ICON, STAR_ICON } from "@/constants/icons";
import { API_IMAGE_BASE_URL } from "@/constants/urls";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardImage, CardTitle } from "./Card";

export const CardHoverEffect = ({ items, isLoading }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {isLoading
        ? [1, 2, 3, 4, 5].map((item) => <Skeleton key={item} />)
        : items?.map((item, idx) => (
            <div
              key={idx}
              className="group relative block size-full overflow-hidden rounded-xl p-3"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 block size-full rounded-xl bg-background-hover"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Link
                href="sljf"
                title="Add to Favorite"
                className="absolute right-5 top-5 z-50 rounded-lg bg-black px-3 py-2 transition-transform duration-300 hover:text-accent group-hover:translate-x-0 md:translate-x-56"
              >
                <Icon icon={HEART_ICON} height={16} />
              </Link>
              <Link href={"item?.link"} key={idx} className="relative">
                <Card>
                  <div className="absolute left-2 top-2 z-50 flex items-center gap-0.5 rounded-lg bg-black px-1.5 py-1 text-sm text-foreground">
                    <Icon icon={STAR_ICON} height={16} className="text-warn" />{" "}
                    {item.vote_average?.toFixed(1)}
                  </div>

                  <CardImage
                    className="transition-all duration-300 group-hover:rotate-1 group-hover:scale-105"
                    src={`${API_IMAGE_BASE_URL.medium}/${item.poster_path}`}
                  />
                </Card>
                <CardTitle>
                  {item.title} ({new Date(item.release_date).getFullYear()})
                </CardTitle>
              </Link>
              {/* <div className="mt-2 flex flex-wrap gap-1">
            {item.genres.map((genre) => (
              <Link
                key={genre}
                href={genre}
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="genre relative rounded-md text-xxs capitalize text-secondary transition-all duration-300 hover:text-danger hover:underline md:text-xs"
              >
                {genre}
              </Link>
            ))}
          </div> */}
            </div>
          ))}
    </div>
  );
};
