import { getImageUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export const Credits = ({ credits = [], show = "all" }) => {
  const slicedCredits = show === "all" ? credits : credits.slice(0, 8);

  return (
    <>
      {slicedCredits.map((credit) => (
        <Link
          key={credit.name}
          href={`/`}
          className="overflow-hidden rounded-xl border border-tcborder bg-tcborder backdrop-blur-lg transition-all duration-200 hover:border-danger"
        >
          <div className="relative h-32 w-full lg:h-36">
            <Image
              src={getImageUrl(credit.profile_path, "small")}
              alt={credit.name}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
              className="rounded-lg text-xxs"
              priority
            />
          </div>

          <div className="p-2">
            <div className="text-sm !leading-none">{credit.name}</div>
            <div className="mt-2 text-xs text-secondary">
              {credit.character}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
