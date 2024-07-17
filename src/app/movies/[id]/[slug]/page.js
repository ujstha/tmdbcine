"use client";

import { Container, Genre, Loader } from "@/components";
import { API_IMAGE_BASE_URL } from "@/constants";
import { useMovieById } from "@/hooks";

const Movie = ({ params }) => {
  const { isLoading, data } = useMovieById(params.id);

  if (isLoading) return <Loader />;

  return (
    <>
      {console.log({ data })}
      <div
        style={{
          backgroundImage: `url(${API_IMAGE_BASE_URL.original}/${data?.backdrop_path})`,
        }}
        className="relative h-screen w-full bg-cover bg-center"
      >
        <div className="absolute inset-0 size-full bg-black/50" />
        <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-background-secondary text-foreground-secondary">
          <Container className="flex h-full flex-col justify-center">
            <h1 className="w-3/4 text-balance text-3xl font-bold sm:w-5/6 md:text-5xl">
              {data.original_title}
            </h1>
            <h2 className="text-lg">{data.tagline}</h2>
            <div className="mt-4 flex flex-wrap gap-1 sm:gap-2">
              <Genre genres={data.genres} variant="outlined" />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Movie;
