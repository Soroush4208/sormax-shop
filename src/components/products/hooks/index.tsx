import { ProductsType } from "@/components/home/hooks/type";
import axios from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const getProductsAll = async (): Promise<ProductsType[]> => {
  const response = await axios.get("/products?limit=all");
  console.log(response.data.data.products);
  return response.data.data.products;
};

export const useGetProductsAll = (initialData: ProductsType[]) => {
  return useQuery<ProductsType[]>({
    queryKey: ["all-products"],
    queryFn: getProductsAll,
    initialData,
  });
};
