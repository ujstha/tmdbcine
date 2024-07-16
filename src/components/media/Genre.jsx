"use client";

import Link from "next/link";

export const Genre = ({ genres, mediaType = "movie" }) => {
  return genres?.map(({ id, name }) => (
    <Link
      key={id}
      href={`/${mediaType}s?genre_id=${id}`}
      className="genre relative rounded-md text-xxs capitalize text-secondary transition-all duration-300 hover:text-danger hover:underline md:text-xs"
    >
      {name}
    </Link>
  ));
};
