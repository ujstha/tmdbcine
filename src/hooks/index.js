import { useQuery } from "@tanstack/react-query";
import { fetchTrending } from "../services";

export const useTrendings = () =>
  useQuery({
    queryKey: ["trendings"],
    queryFn: async () => await fetchTrending(),
  });
