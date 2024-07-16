import { Container } from "@/components";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", title: "" },
  { href: "/movies", title: "Movies" },
  { href: "/tv-shows", title: "TV Shows" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 py-2">
      <Container className="flex !max-w-2xl items-center justify-between rounded-lg border border-background-hover bg-background px-4 py-2">
        <Link href={"/"} className="relative h-10 w-24">
          <Image
            src={"/assets/logo.png"}
            fill
            sizes="100vw"
            alt="TMDbCine logo"
            priority
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            {navItems?.map(({ title, href }) => (
              <li
                key={title}
                className="cursor-pointer text-sm underline-offset-0 transition-all duration-200 hover:text-accent hover:underline hover:underline-offset-4"
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
