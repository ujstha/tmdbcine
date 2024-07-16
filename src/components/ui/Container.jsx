import { cn } from "@/utils";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("mx-auto sm:max-w-body-md lg:max-w-body", className)}>
      {children}
    </div>
  );
};
