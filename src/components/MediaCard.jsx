import { Card, CardImage, CardTitle, FavoriteButton } from "@/components";
import { API_IMAGE_BASE_URL } from "@/constants";
import { renderReleaseYear, toSlug } from "@/utils";
import Link from "next/link";
import { Genre } from "./Genre";
import { Rating } from "./Rating";

export const MediaCard = ({ item }) => {
  return (
    <>
      <FavoriteButton />
      <Link href={`${item.id}/${toSlug(item.title)}`} className="relative">
        <Card>
          <Rating item={item} />
          <CardImage
            className="transition-all duration-300 group-hover:rotate-1 group-hover:scale-105"
            src={`${API_IMAGE_BASE_URL.medium}/${item.poster_path}`}
          />
        </Card>
        <CardTitle>
          {item.title} ({renderReleaseYear(item)})
        </CardTitle>
      </Link>
      <div className="mt-2 flex flex-wrap gap-1">
        <Genre genres={item?.genre_ids} />
      </div>
    </>
  );
};
