"use client";

import { CardHoverEffect, Loader, MediaCard } from "@/components";
import { useTrendings } from "@/hooks";

const Trending = () => {
  const { isLoading, data } = useTrendings();

  if (isLoading) {
    return <Loader size="4" />;
  }
  console.log({ data });
  return (
    <div className="mx-auto grid grid-cols-2 sm:max-w-body-md md:grid-cols-4 lg:max-w-body lg:grid-cols-5">
      {data?.data?.results?.map((item, idx) => (
        <CardHoverEffect key={idx} index={idx}>
          <MediaCard item={item} />
        </CardHoverEffect>
      ))}
    </div>
  );
};

export default Trending;
