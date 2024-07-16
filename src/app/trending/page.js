"use client";

import { CardHoverEffect, Loader, MediaCard, Section } from "@/components";
import { useTrendings } from "@/hooks";

const Trending = () => {
  const { isLoading, data } = useTrendings();

  if (isLoading) {
    return <Loader size="4" />;
  }
  console.log({ data });
  return (
    <Section containerClassName="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {data?.data?.results?.map((item, idx) => (
        <CardHoverEffect key={idx} index={idx}>
          <MediaCard item={item} />
        </CardHoverEffect>
      ))}
    </Section>
  );
};

export default Trending;
