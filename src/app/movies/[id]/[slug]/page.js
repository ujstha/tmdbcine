"use client";

import {
  Card,
  CardImage,
  Container,
  Credits,
  CustomIcon,
  Genre,
  Images,
  Loader,
  MediaCarousel,
  Section,
  SectionHeading,
} from "@/components";
import {
  CALENDAR_ICON,
  CLOCK_ICON,
  HEART_OUTLINED_ICON,
  LANGUAGE_ICON,
  LINK_ICON,
  PLAY_ICON,
} from "@/constants";
import { useMovieById } from "@/hooks";
import { getImageUrl } from "@/utils";
import Link from "next/link";

const infos = [
  {
    title: "Duration",
    icon: CLOCK_ICON,
    detail: (data) => ({
      value: data.runtime ? `${data.runtime} min` : "N/A",
      href: `/movies?runtime=${data.runtime}`,
    }),
  },
  {
    title: "Release",
    icon: CALENDAR_ICON,
    detail: (data) => ({
      value: data.release_date ?? "N/A",
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

  const linkClass =
    "flex size-10 sm:size-12 items-center justify-center rounded-lg border border-tcborder bg-tcborder backdrop-blur-sm transition-all duration-200 hover:border-danger hover:text-danger";

  return (
    <>
      {console.log({ data })}
      <div
        style={{
          backgroundImage: `url(${getImageUrl(data?.backdrop_path, "original")})`,
        }}
        className="relative h-screen w-full bg-cover bg-center md:h-[85dvh]"
      >
        <div className="absolute inset-0 size-full bg-black/70" />
        <div
          className={`absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-background text-foreground-secondary sm:h-3/4`}
        >
          <Container className="flex h-full flex-col justify-end pb-2">
            <div className="flex flex-col justify-center gap-8 md:flex-row md:justify-start">
              <div className="flex items-start gap-4 sm:flex-row sm:gap-8">
                <Card className="h-48 max-w-32 shadow-sm shadow-background-secondary sm:block md:!h-80 md:w-56 md:max-w-56">
                  <CardImage src={data.poster_path} title={data.title} />
                </Card>
                <div className="flex flex-col gap-2">
                  <Link href={`/`} className={linkClass}>
                    <CustomIcon icon={HEART_OUTLINED_ICON} height={28} />
                  </Link>
                  <Link href={`/`} className={linkClass}>
                    <CustomIcon icon={PLAY_ICON} height={32} />
                  </Link>
                  <Link
                    href={data.homepage}
                    className={linkClass}
                    target="_blank"
                  >
                    <CustomIcon icon={LINK_ICON} height={28} />
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-balance text-3xl font-extrabold leading-none md:text-4xl lg:text-5xl">
                  {data.title}{" "}
                  <small className="font-normal">({data.release_year})</small>
                </h1>
                <h2 className="mt-2 text-lg text-secondary">{data.tagline}</h2>
                <div className="mt-4 grid max-w-md grid-cols-3 gap-1 overflow-hidden rounded-lg border border-tcborder p-1 backdrop-blur-sm">
                  {infos.map((info) => (
                    <Link
                      href={`${info.detail(data).href}`}
                      key={info.title}
                      className="group flex items-center gap-3 rounded-md border border-transparent p-1 transition-all duration-200 hover:border-tcborder sm:px-2"
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
      <Section>
        <div>
          <p className="text-balance text-sm leading-relaxed md:text-base">
            {data.overview}
          </p>
          <SectionHeading
            title={"Casts"}
            itemCount={data.credits.cast.length}
            url={`${params.slug}/credits`}
          />
          <Credits credits={data.credits.cast} show="short" />
          <SectionHeading
            title={"Crews"}
            itemCount={data.credits.crew.length}
            url={`${params.slug}/credits`}
          />
          <Credits credits={data.credits.crew} show="short" />
          <SectionHeading
            title={"Photos & Backdrops"}
            itemCount={data.images.length > 50 ? 50 : data.images.length}
            url={`${params.slug}/images`}
          />
          <Images images={data.images} show="short" />
          <SectionHeading title={"More like this"} />
          <MediaCarousel medias={data.similar} />
          <SectionHeading title={"Recommended by us"} />
          <MediaCarousel medias={data.recommendations} />
        </div>
      </Section>
    </>
  );
};

export default Movie;
