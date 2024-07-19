"use client";

import { fetchById, fetchDataWithGenres } from "@/services";
import useSWR from "swr";

export const useTrendings = (mediaType) =>
  useSWR([mediaType], (mediaType) =>
    fetchDataWithGenres(`/trending/${mediaType}/week`, mediaType)
  );

export const useMovieById = (id) =>
  useSWR([id], (id) => fetchById("movie", id));
