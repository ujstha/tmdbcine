"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HEART_ICON, STAR_ICON } from "../../constants/icons";
import { Card, CardImage, CardTitle } from "./Card";

export const CardHoverEffect = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 gap-x-1 gap-y-4 md:grid-cols-3 lg:grid-cols-5">
      {items?.map((item, idx) => (
        <div
          key={item?.link}
          className="group relative block size-full overflow-hidden rounded-xl p-2"
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
            className="absolute right-4 top-12 z-50 rounded-lg bg-black px-3 py-2 transition-transform duration-300 hover:text-accent group-hover:translate-x-0 md:translate-x-56"
          >
            <Icon icon={HEART_ICON} height={16} />
          </Link>
          <Link href={item?.link} key={idx} className="relative">
            <Card>
              <div className="absolute right-2 top-2 z-50 flex items-center gap-0.5 rounded-lg bg-black px-1.5 py-1 text-sm text-foreground">
                <Icon icon={STAR_ICON} height={16} className="text-warn" /> 8.5
              </div>

              <CardImage src="https://image.tmdb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg" />
            </Card>
            <CardTitle>{item.title}</CardTitle>
            <div className="mt-2 flex flex-wrap gap-1">
              {item.genres.map((genre) => (
                <span
                  key={genre}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="genre rounded-md text-xxs capitalize text-secondary hover:text-danger md:text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
