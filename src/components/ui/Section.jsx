import { ARROW_RIGHT_ICON } from "@/constants";
import { cn } from "@/utils";
import Link from "next/link";
import { CustomIcon } from "..";
import { Container } from "./Container";

export const Section = ({ children, sectionClassName, containerClassName }) => {
  return (
    <section className={cn("md:px-4 py-10 lg:py-16", sectionClassName)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

// export const SectionHeading = ({ title, url = "" }) => {
//   return (
//     <div className="mb-4 mt-12 flex items-center justify-between">
//       <h2 className="text-xl font-semibold">{title}</h2>
//       {url && (
//         <Link
//           href={url}
//           className="rounded-md border border-transparent px-2 py-1 text-sm underline underline-offset-4 transition-all duration-200 hover:border-danger hover:text-danger"
//         >
//           View More
//         </Link>
//       )}
//     </div>
//   );
// };

export const SectionHeading = ({ title, itemCount, url = "" }) => {
  if (url) {
    return (
      <Link href={url} className="group mb-4 mt-12 flex items-center gap-2">
        <h2 className="text-xl font-medium md:text-2xl">{title}</h2>
        <span className="flex items-center">
          <small className="text-xs text-secondary">{itemCount}</small>{" "}
          <CustomIcon
            icon={ARROW_RIGHT_ICON}
            className="transition-all duration-200 group-hover:translate-x-2 group-hover:text-danger"
          />
        </span>
      </Link>
    );
  }

  return (
    <h2 className="mb-4 mt-12 text-xl font-medium md:text-2xl">{title}</h2>
  );
};
