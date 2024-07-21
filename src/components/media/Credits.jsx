import { getImageUrl } from "@/utils";
import Link from "next/link";
import { CardImage, SectionHeading } from "..";

export const Credits = ({ credits = [], title = "Casts", show = "all" }) => {
  const slicedCredits = show === "all" ? credits : credits.slice(0, 8);

  if (slicedCredits.length === 0) return null;

  return (
    <>
      <SectionHeading title={title} />
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8">
        {slicedCredits.map((credit) => {
          return (
            <Link
              key={credit.name}
              href={`/`}
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
                <div className="text-sm leading-tight">{credit.name}</div>
                <div className="mt-1 text-xs text-secondary">
                  {credit.character}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
