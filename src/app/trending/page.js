import { Button, CardHoverEffect, Loader } from "@/components";
import { fetchTrending } from "@/services";
import { useQuery } from "@tanstack/react-query";

// const items = [
//   {
//     title: "Inside Out",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime"],
//   },
//   {
//     title: "Inside Out",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime", "mystery", "thriller"],
//   },
//   {
//     title: "Inside Out",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime", "mystery", "thriller"],
//   },
//   {
//     title: "Inside Out",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime", "mystery", "thriller"],
//   },
//   {
//     title: "Inside Out",
//     link: "https://tmdb",
//     genres: [
//       "action",
//       "adventure",
//       "crime",
//       "mystery",
//       "thriller",
//       "animation",
//     ],
//   },
//   {
//     title: "Inside Out lsjdfklsjlfkjslkdfjslk sdlfkjs ",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime", "mystery", "thriller"],
//   },
//   {
//     title: "Inside Out lsjdfklsjlfkjslkdfjslk sdlfkjs ",
//     link: "https://tmdb",
//     genres: ["action", "adventure", "crime", "mystery", "thriller"],
//   },
// ];

const Trending = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => await fetchTrending(),
  });

  console.log({ data });
  return (
    <div className="mx-auto sm:max-w-body-md lg:max-w-body ">
      <Button />
      <CardHoverEffect isLoading={isLoading} items={data?.data?.results} />
      <Loader size="4" />
    </div>
  );
};

export default Trending;
