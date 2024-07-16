"use client";

import { Loader } from "@/components";
import { useMovieById } from "@/hooks";

const Movie = ({ params }) => {
  const { isLoading, data } = useMovieById(params.id);

  if (isLoading) return <Loader />;

  return (
    <div>
      {console.log({ data })}
      {params.id}
      {params.slug}
    </div>
  );
};

export default Movie;
