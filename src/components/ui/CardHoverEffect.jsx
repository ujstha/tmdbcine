"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Card, CardImage, CardTitle } from "./Card";

export const CardHoverEffect = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {items?.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="group relative block size-full"
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
          <div key={idx} className="relative m-2">
            <Card className="">
              <CardImage src="https://image.tmdb.org/t/p/original/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg" />
            </Card>
            <CardTitle>{item.title}</CardTitle>
            <>
              {item.genres.map((genre) => (
                <span
                  key={genre}
                  // eslint-disable-next-line tailwindcss/no-custom-classname
                  className="genre text-xs capitalize text-secondary hover:text-danger"
                >
                  {genre}
                </span>
              ))}
            </>
          </div>
        </Link>
      ))}
    </div>
  );
};
