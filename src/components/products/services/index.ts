import { ProductsType } from "@/components/home/hooks/type";
import axios from "@/utils/axiosConfig";

export const getProductsAll = async (): Promise<ProductsType[]> => {
  const response = await axios.get("/products?limit=all");
  console.log(response.data.data.products);
  return response.data.data.products;
};
