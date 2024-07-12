"use client";

import { HEART_ICON } from "@/constants/icons";
import { Icon } from "@iconify/react";
import { useState } from "react";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={(prev) => setIsFavorite(!prev)}
      className="absolute right-5 top-5 z-50 rounded-lg bg-black px-3 py-2 transition-transform duration-300 hover:text-accent group-hover:translate-x-0 md:translate-x-56"
    >
      <Icon icon={isFavorite ? HEART_ICON : HEART_ICON} />
    </button>
  );
};
