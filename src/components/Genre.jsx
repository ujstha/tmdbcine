"use client";

import { useGenres } from "@/hooks";
import Link from "next/link";
import { Loader } from "./ui/Loader";

export const Genre = ({ genres, mediaType = "movie" }) => {
  const { isLoading, data } = useGenres(mediaType);

  if (isLoading) return <Loader />;

  return data?.data?.genres
    ?.filter(({ id }) => genres.includes(id))
    ?.map((genre) => (
      <Link
        key={genre.id}
        href={`/${mediaType}?genre_id=${genre.id}`}
        className="genre relative rounded-md text-xxs capitalize text-secondary transition-all duration-300 hover:text-danger hover:underline md:text-xs"
      >
        {genre.name}
      </Link>
    ));
};
