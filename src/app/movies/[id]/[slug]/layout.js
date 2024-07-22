import { API_IMAGE_BASE_URL } from "@/constants";
import { fetchById } from "@/services";

export const generateMetadata = async ({ params }) => {
  const movie = await fetchById("movie", params.id);

  return {
    metadataBase: "https://tmdb-cine.netlify.app",
    title: movie.title,
    description: movie.overview.substring(0, 160),
    openGraph: {
      images: `${API_IMAGE_BASE_URL.large}${movie.poster_path}`,
    },
  };
};

export default function MoviesLayout({ children }) {
  return children;
}
