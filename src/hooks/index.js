"use client";

import { fetchById, fetchGenre, fetchTrending } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useTrendings = () =>
  useQuery({
    queryKey: ["trendings"],
    queryFn: async () => await fetchTrending(),
  });

export const useGenres = (mediaType = "movie") =>
  useQuery({
    queryKey: ["genres"],
    queryFn: async () => await fetchGenre(mediaType),
  });

export const useMovieById = (id) =>
  useQuery({
    queryKey: ["movie-by-id"],
    queryFn: async () => await fetchById("movie", id),
  });
