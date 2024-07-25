import { cn, getImageUrl } from "@/utils";
import { CustomImage } from "./CustomImage";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-background md:h-60 lg:h-68 relative z-20 h-64 max-w-full w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3
      className={cn(
        "relative mt-2.5 !w-[95%] truncate leading-5 text-accent",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardImage = ({
  className,
  title,
  imgSize = "medium",
  src,
  ...props
}) => {
  return (
    <CustomImage
      src={getImageUrl(src, imgSize)}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: "cover", objectPosition: "top" }}
      alt={`${title} image`}
      priority
      quality={100}
      placeholder="blur"
      blurDataURL={getImageUrl(src, "extra_small")}
      {...props}
      className={cn(
        "bg-tcborder text-xxs transition-all duration-200",
        className
      )}
    />
  );
};
