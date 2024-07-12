import { CardHoverEffect, Loader } from "@/components";
import { useTrendings } from "@/hooks";

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
  const { isLoading, data } = useTrendings();

  if (isLoading) {
    return <Loader size="4" />;
  }
  console.log({ data });
  return (
    <div className="mx-auto sm:max-w-body-md lg:max-w-body ">
      <CardHoverEffect isLoading={isLoading} items={data?.data?.results} />
    </div>
  );
};

export default Trending;
