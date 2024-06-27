import { Button } from "@/components";
import { CardHoverEffect } from "../components/ui/CardHoverEffect";

const items = [
  {
    title: "Inside Out",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime"],
  },
  {
    title: "Inside Out",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime", "mystery", "thriller"],
  },
  {
    title: "Inside Out",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime", "mystery", "thriller"],
  },
  {
    title: "Inside Out",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime", "mystery", "thriller"],
  },
  {
    title: "Inside Out",
    link: "https://tmdb",
    genres: [
      "action",
      "adventure",
      "crime",
      "mystery",
      "thriller",
      "animation",
    ],
  },
  {
    title: "Inside Out lsjdfklsjlfkjslkdfjslk sdlfkjs ",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime", "mystery", "thriller"],
  },
  {
    title: "Inside Out lsjdfklsjlfkjslkdfjslk sdlfkjs ",
    link: "https://tmdb",
    genres: ["action", "adventure", "crime", "mystery", "thriller"],
  },
];

const Home = () => {
  return (
    <div className="mx-auto max-w-body">
      <Button />
      <CardHoverEffect items={items} />
    </div>
  );
};

export default Home;
