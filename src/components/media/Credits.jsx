import { getImageUrl } from "@/utils";
import Link from "next/link";
import { CardImage } from "..";
import { Carousel } from "../ui/Carousel";

export const Credits = ({ credits = [], show = "all" }) => {
  const slicedCredits = show === "all" ? credits : credits.slice(0, 10);

  if (slicedCredits.length === 0) return null;

  const renderCredits = (credit) => (
    <Link
      key={credit.id}
      href={`/person/${credit.id}`}
      className="overflow-hidden rounded-xl border border-tcborder bg-tcborder backdrop-blur-lg transition-all duration-200 hover:border-danger"
    >
      <div className="relative h-32 w-full lg:h-36">
        <CardImage
          src={getImageUrl(credit.profile_path, "small")}
          title={credit.name}
          className="rounded-lg"
        />
      </div>

      <div className="p-2">
        <div className="text-xs leading-tight lg:text-sm">{credit.name}</div>
        <div className="mt-1 text-xxs text-secondary lg:text-xs">
          {credit.character}
        </div>
      </div>
    </Link>
  );

  if (show === "all") {
    return (
      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {slicedCredits.map((credit) => renderCredits(credit))}
      </div>
    );
  }

  return (
    <Carousel>{slicedCredits.map((credit) => renderCredits(credit))}</Carousel>
  );
};
