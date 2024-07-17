// hooks/useGetAllProducts.ts
import { IProduct } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsToDashboard } from "../services";

export const useGetAllProductsToDashboard = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-products-dashboard"],
    queryFn: getAllProductsToDashboard,
  });
};
