import { cn, getImageUrl } from "@/utils";
import Image from "next/image";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-background md:h-60 lg:h-68 relative z-20 h-64 max-w-48 w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="relative h-full p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "relative mt-2.5 truncate leading-5 text-accent",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({
  className,
  title,
  imgSize = "medium",
  src,
  onError,
}) => {
  return (
    <Image
      src={getImageUrl(src, imgSize)}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "cover" }}
      alt={`${title} image`}
      priority
      quality={100}
      className={cn("bg-tcborder", className)}
      onError={onError}
    />
  );
};
