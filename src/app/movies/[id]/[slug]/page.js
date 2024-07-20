"use client";

import {
  Card,
  CardImage,
  Container,
  CustomIcon,
  Genre,
  Loader,
} from "@/components";
import {
  API_IMAGE_BASE_URL,
  CALENDAR_ICON,
  CLOCK_ICON,
  LANGUAGE_ICON,
} from "@/constants";
import { useMovieById } from "@/hooks";
import Link from "next/link";

const infos = [
  {
    title: "Duration",
    icon: CLOCK_ICON,
    detail: (data) => ({
      value: `${data.runtime} min`,
      href: `/movies?runtime=${data.runtime}`,
    }),
  },
  {
    title: "Release",
    icon: CALENDAR_ICON,
    detail: (data) => ({
      value: data.release_date,
      href: `/movies?release_year=${data.release_year}`,
    }),
  },
  {
    title: "Language",
    icon: LANGUAGE_ICON,
    detail: (data) => ({
      value: data.language,
      href: `/movies?language=${data.language}`,
    }),
  },
];

const Movie = ({ params }) => {
  const { isLoading, data } = useMovieById(params.id);

  if (isLoading)
    return (
      <div className="min-h-96 py-28">
        <Loader size="2" />
      </div>
    );

  return (
    <>
      {console.log({ data })}
      <div
        style={{
          backgroundImage: `url(${API_IMAGE_BASE_URL.original}/${data?.backdrop_path})`,
        }}
        className="relative h-[80dvh] w-full bg-cover bg-center md:h-[60dvh] lg:h-screen"
      >
        <div className="absolute inset-0 size-full bg-black/50" />
        <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-background text-foreground-secondary">
          <Container className="flex h-full flex-col justify-center">
            <div className="flex items-start gap-8">
              <Card className="hidden !h-72 shadow-sm shadow-background-secondary sm:block">
                <CardImage
                  src={`${API_IMAGE_BASE_URL.medium}${data.poster_path}`}
                  alt={data.title}
                />
              </Card>
              <div>
                <h1 className="w-5/6 text-balance text-3xl font-extrabold sm:w-full md:text-4xl lg:w-3/4 lg:text-5xl">
                  {data.title}
                </h1>
                <h2 className="mt-2 text-lg">{data.tagline}</h2>
                <div className="mt-4 grid max-w-md grid-cols-3 gap-1 overflow-hidden rounded-lg border border-tcborder p-1">
                  {infos.map((info) => (
                    <Link
                      href={`${info.detail(data).href}`}
                      key={info.title}
                      className="group flex items-center gap-3 rounded-md p-1 transition-all duration-200 hover:backdrop-blur-lg sm:px-2"
                    >
                      <CustomIcon icon={info.icon} />
                      <span className="flex flex-col">
                        <span className="text-xxs text-secondary sm:text-xs">
                          {info.title}
                        </span>
                        <span className="text-xs transition-all duration-200 group-hover:text-danger sm:text-sm">
                          {info.detail(data).value}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-1 sm:gap-2">
                  <Genre genres={data.genres} variant="outlined" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Movie;
