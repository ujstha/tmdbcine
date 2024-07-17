export const generateMetadata = ({ params }) => {
  const title = params.slug?.replace(/-/g, " ");
  return {
    title,
    description: "Search for Movies, TV Shows, and Celebrities",
  };
};

export default function MoviesLayout({ children }) {
  return children;
}
