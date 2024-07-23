// hooks/useGetAllProducts.ts
import {
  createProducts,
  getAllCategoryProducts,
  getAllOrders,
  getAllProductsToDashboard,
  getAllUsers,
  getSubcategoriesByCategory,
  updateProduct,
} from "@/components/dashboard/services/index";
import { queryClient } from "@/pages/_app";
import { IProduct, IUserType, OrderType } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllProductsToDashboard = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-product-dashboard"],
    queryFn: getAllProductsToDashboard,
  });
};

export const usePostDataProducts = () => {
  queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
  return useMutation({
    mutationKey: ["products"],
    mutationFn: createProducts,
  });
};

export const useGetAllCategoryToDashboard = () => {
  return useQuery({
    queryKey: ["all-category-dashboard"],
    queryFn: getAllCategoryProducts,
  });
};

export const useGetSubcategories = (categoryId: string) => {
  return useQuery({
    queryKey: ["subcategories", categoryId],
    queryFn: () => getSubcategoriesByCategory(categoryId),
  });
};

export const useGetAllUsersToDashboard = () => {
  return useQuery<IUserType[]>({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });
};

export const useGetAllOrdersToDashboard = () => {
  return useQuery<OrderType[]>({
    queryKey: ["all-Orders"],
    queryFn: getAllOrders,
  });
};

export const useEditData = () => {
  queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
  return useMutation({
    mutationKey: ["edit-data"],
    mutationFn: ({ id, product }: { id: string; product: FormData }) =>
      updateProduct(id, product),
  });
};
