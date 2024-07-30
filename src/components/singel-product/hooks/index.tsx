import { ProductsType } from "@/components/home/hooks/type";
import {
  CommentType,
  getAllComment,
  getProductByCategory,
} from "@/components/singel-product/services/index";
import axios from "@/utils/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const getProductById = async (id: string): Promise<ProductsType> => {
  const response = await axios.get(`/products/${id}`);
  return response.data.data.product;
};

export const useProduct = (id: string, initialData: ProductsType[]) => {
  const initialProductById = initialData.find((product) => product._id === id);

  return useQuery<ProductsType>({
    queryKey: ["single-product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    initialData: initialProductById,
  });
};

export const useGetAllComments = () => {
  return useQuery<CommentType[]>({
    queryKey: ["all-comments"],
    queryFn: getAllComment,
  });
};

export const useGetProductByCategory = () => {
  return useQuery<ProductsType[]>({
    queryKey: ["by-category"],
    queryFn: getProductByCategory,
    refetchOnWindowFocus: false,
  });
};
