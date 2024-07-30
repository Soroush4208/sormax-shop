import { ProductsType } from "@/components/home/hooks/type";
import { getProductsAll } from "@/components/products/services/index";
import { useQuery } from "@tanstack/react-query";

export const useGetProductsAll = (initialData: ProductsType[]) => {
  return useQuery<ProductsType[]>({
    queryKey: ["all-products"],
    queryFn: getProductsAll,
    initialData,
  });
};
