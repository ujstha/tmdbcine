"use client";

import { HEART_ICON, HEART_OUTLINED_ICON } from "@/constants";
import { useState } from "react";
import { CustomIcon } from "./CustomIcon";

export const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite((prev) => !prev)}
      title="Add to Favorite"
      className={`absolute right-5 top-5 z-30 rounded-lg px-2 py-1 hover:text-danger ${isFavorite ? "text-danger" : "text-foreground-secondary"}`}
    >
      <CustomIcon icon={isFavorite ? HEART_ICON : HEART_OUTLINED_ICON} />
    </button>
  );
};
