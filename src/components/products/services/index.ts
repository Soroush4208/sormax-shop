import { ProductsType } from "@/components/home/hooks/type";
import axios from "@/utils/axiosConfig";

export const getProductsAll = async (): Promise<ProductsType[]> => {
  const response = await axios.get("/products?limit=all");
  return response.data.data.products;
};

export const getProductsAllBySubcategory = async (
  id: string
): Promise<ProductsType[]> => {
  const response = await axios.get(`/products?limit=all&subcategory=${id}`);
  return response.data.data.products;
};
