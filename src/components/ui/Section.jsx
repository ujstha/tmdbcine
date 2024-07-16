import { cn } from "@/utils";
import { Container } from "./Container";

export const Section = ({ children, sectionClassName, containerClassName }) => {
  return (
    <section className={cn("md:px-4 py-10 lg:py-16", sectionClassName)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
