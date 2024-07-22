"use client";

import { IMAGE_NOT_AVAILABLE_URL } from "@/constants";
import Image from "next/image";
import { forwardRef, useState } from "react";

export const CustomImage = forwardRef(function CustomImage(
  { src, fallbackSrc, alt, ...props },
  ref
) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      ref={ref}
      src={imgSrc}
      onError={() => setImgSrc(IMAGE_NOT_AVAILABLE_URL)}
      alt={alt}
      {...props}
    />
  );
});
