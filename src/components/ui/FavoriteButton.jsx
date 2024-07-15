"use client";

import { HEART_ICON } from "@/constants";
import { useState } from "react";
import { CustomIcon } from "./CustomIcon";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={(prev) => setIsFavorite(!prev)}
      title="Add to Favorite"
      className="absolute right-5 top-5 z-50 rounded-lg bg-black px-3 py-2 transition-transform duration-300 hover:text-accent group-hover:translate-x-0 md:translate-x-56"
    >
      <CustomIcon icon={isFavorite ? HEART_ICON : HEART_ICON} />
    </button>
  );
};
