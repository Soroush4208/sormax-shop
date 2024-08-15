import { ProductsType } from "@/components/home/hooks/type";
import axios from "@/utils/axiosConfig";

const BASE_URL = "https://66a6ed7b23b29e17a1a3be0a.mockapi.io";

export type CommentType = {
  createdAt: string;
  name: string;
  avatar: string;
  rating: string;
  id: string;
  comment: string;
};
export const getAllComment = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/comments`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function getProductByCategory(): Promise<ProductsType[]> {
  const res = await axios.get("/products?limit=all");
  return res.data.data.products;
}
