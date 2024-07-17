"use client";

import { Loader } from "@/components";
import { useMovieById } from "@/hooks";

const Movie = ({ params }) => {
  const { isLoading, data } = useMovieById(params.id);

  if (isLoading) return <Loader />;

  return (
    <>
      {console.log({ data })}
      <div></div>
    </>
  );
};

export default Movie;
