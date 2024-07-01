"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Trending from "./trending/page";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Trending />
    </QueryClientProvider>
  );
};

export default Home;
