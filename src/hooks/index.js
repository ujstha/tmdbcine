"use client";

import { fetchById, fetchDataWithGenres, fetchGenres } from "@/services";
import { useQuery } from "@tanstack/react-query";
import useSWR from "swr";

export const useTrendings = (mediaType) =>
  useSWR([mediaType], (mediaType) =>
    fetchDataWithGenres(`/trending/${mediaType}/week`, mediaType)
  );

export const useGenres = (mediaType = "movie") =>
  useQuery({
    queryKey: ["genres"],
    queryFn: async () => await fetchGenres(mediaType),
  });

export const useMovieById = (id) =>
  useQuery({
    queryKey: ["movie-by-id"],
    queryFn: async () => await fetchById("movie", id),
  });
