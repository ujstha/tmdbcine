import { cn } from "@/utils";
import Link from "next/link";
import { Container } from "./Container";

export const Section = ({ children, sectionClassName, containerClassName }) => {
  return (
    <section className={cn("md:px-4 py-10 lg:py-16", sectionClassName)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export const SectionHeading = ({ title, url = "" }) => {
  return (
    <div className="mb-4 mt-12 flex items-center justify-between">
      <h2 className="text-xl font-semibold">{title}</h2>
      {url && (
        <Link
          href={url}
          className="rounded-md border border-transparent px-2 py-1 text-sm underline underline-offset-4 transition-all duration-200 hover:border-danger hover:text-danger"
        >
          View More
        </Link>
      )}
    </div>
  );
};
