// hooks/useGetAllProducts.ts
import { IProduct } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services";

export const useGetAllProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-products"],
    queryFn: getProducts,
  });
};
