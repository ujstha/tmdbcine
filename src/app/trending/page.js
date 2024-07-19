"use client";

import { CardHoverEffect, MediaCard, Section, Skeleton } from "@/components";
import { useTrendings } from "@/hooks";

const Trending = () => {
  const { isLoading, data } = useTrendings("movie");

  console.log({ dd: data });

  return (
    <>
      <Section containerClassName="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {isLoading && Array.from(Array(10), (v, i) => <Skeleton key={i} />)}

        {data?.results?.map((item, idx) => (
          <CardHoverEffect key={idx} index={idx}>
            <MediaCard item={item} />
          </CardHoverEffect>
        ))}
      </Section>
    </>
  );
};

export default Trending;
