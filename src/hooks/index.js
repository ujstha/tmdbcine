"use client";

import { fetchGenre, fetchTrending } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useTrendings = () =>
  useQuery({
    queryKey: ["trendings"],
    queryFn: async () => await fetchTrending(),
  });

export const useGenres = (type = "movie") =>
  useQuery({
    queryKey: ["genres"],
    queryFn: async () => await fetchGenre(type),
  });
