// hooks/useGetAllProducts.ts
import {
  getAllCategoryProducts,
  getAllProductsToDashboard,
  getAllUsers,
} from "@/components/dashboard/services/index";
import { IProduct, IUserType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProductsToDashboard = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-product-dashboard"],
    queryFn: getAllProductsToDashboard,
  });
};

export const useGetAllCategoryToDashboard = () => {
  return useQuery<IProduct[]>({
    queryKey: ["all-category-dashboard"],
    queryFn: getAllCategoryProducts,
  });
};

export const useGetAllUsersToDashboard = () => {
  return useQuery<IUserType[]>({
    queryKey: ["all-users"],
    queryFn: getAllUsers,
  });
};
