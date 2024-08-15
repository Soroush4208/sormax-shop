import { ProductsType } from "@/components/home/hooks/type";
import {
  getProductsAll,
  getProductsAllBySubcategory,
} from "@/components/products/services/index";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsAll = (initialData: ProductsType[]) => {
  return useQuery<ProductsType[]>({
    queryKey: ["all-products"],
    queryFn: getProductsAll,
    initialData,
  });
};

export const useGetProductsAllBySubcategory = (id: string) => {
  return useQuery<ProductsType[]>({
    queryKey: ["all-products", id],
    queryFn: () => getProductsAllBySubcategory(id),
  });
};