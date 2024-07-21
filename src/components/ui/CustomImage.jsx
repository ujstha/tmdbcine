"use client";

import { IMAGE_NOT_AVAILABLE_URL } from "@/constants";
import Image from "next/image";
import { useState } from "react";

export const CustomImage = ({ src, fallbackSrc, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      onError={() => setImgSrc(IMAGE_NOT_AVAILABLE_URL)}
      alt={alt}
      {...props}
    />
  );
};
