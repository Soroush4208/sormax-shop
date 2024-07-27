// hooks/useGetAllProducts.ts
import { ProductsType } from "@/components/home/hooks/type";
import { getProducts } from "@/components/home/services/index";
import { IProduct } from "@/types/types";
import axios from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-products"],
    queryFn: getProducts,
  });
};

const getProductsToHome = async (): Promise<ProductsType[]> => {
  const response = await axios.get(
    "/products?sort=-createdAt&page=1&limit=all"
  );
  return response.data.data.products;
};

export const useGetAllProductsToHome = (initialData: ProductsType[]) => {
  return useQuery<ProductsType[]>({
    queryKey: ["all-products-to-home"],
    queryFn: getProductsToHome,
    initialData,
  });
};
