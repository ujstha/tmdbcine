import { STAR_ICON } from "@/constants";
import { Icon } from "@iconify/react";

export const Rating = ({ item }) => {
  return (
    <div className="absolute left-2 top-2 z-50 flex items-center gap-0.5 rounded-lg bg-black px-1.5 py-1 text-sm text-foreground">
      <Icon icon={STAR_ICON} height={16} className="text-warn" />{" "}
      {item.vote_average?.toFixed(1)}
    </div>
  );
};
