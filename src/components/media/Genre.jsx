"use client";

import { cn } from "@/utils";
import Link from "next/link";

export const Genre = ({ genres, mediaType = "movie", variant = "" }) => {
  return genres?.map(({ id, name }) => (
    <Link
      key={id}
      href={`/${mediaType}s?genre_id=${id}`}
      className={cn(
        "relative capitalize text-secondary transition-all duration-300 hover:text-danger underline-offset-0 hover:underline-offset-4 hover:underline",
        {
          "text-xs md:text-sm rounded-md border border-background-hover backdrop-blur-sm bg-background-hover px-4 py-2 hover:border-danger":
            variant === "outlined",
          "genre text-xxs md:text-xs": variant === "",
        }
      )}
    >
      {name}
    </Link>
  ));
};
