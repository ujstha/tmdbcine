import { cn } from "@/utils";
import Image from "next/image";

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-background md:h-85 relative z-20 h-64 w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "relative mt-2.5 font-medium truncate leading-5 tracking-wide text-accent",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImage = ({ className, title, src }) => {
  return (
    <Image
      src={src}
      fill
      alt={title}
      className={cn("bg-foreground", className)}
    />
  );
};
