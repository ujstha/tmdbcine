import { Navbar } from "@/components";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | TMDbCine",
    default: "TMDbCine: Everything about Movies, TV Shows, and Celebrities",
  },
  description: "Search for Movies, TV Shows, and Celebrities",
  openGraph: {
    type: "website",
    images: "/assets/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
