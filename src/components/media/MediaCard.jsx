import {
  Card,
  CardImage,
  CardTitle,
  FavoriteButton,
  Genre,
} from "@/components";
import { API_IMAGE_BASE_URL } from "@/constants";
import { createSlug } from "@/utils";
import Link from "next/link";
import { Rating } from "./Rating";

export const MediaCard = ({ item, showTitle = true, cardClass }) => {
  return (
    <>
      <FavoriteButton />
      <Link
        href={`/${item.media_type}s/${item.id}/${createSlug(item.title)}`}
        className="relative"
      >
        <Card className={cardClass}>
          <Rating item={item} />
          <CardImage
            title={item.title}
            className="transition-all duration-300 group-hover:rotate-1 group-hover:scale-105"
            src={`${API_IMAGE_BASE_URL.medium}/${item.poster_path}`}
          />
        </Card>
        {showTitle && (
          <CardTitle>
            {item.title} ({item.release_year})
          </CardTitle>
        )}
      </Link>
      {showTitle && (
        <div className="mt-2 flex flex-wrap gap-1">
          <Genre genres={item?.genres} mediaType={item?.media_type} />
        </div>
      )}
    </>
  );
};
