// hooks/useGetAllProducts.ts
import {
  createProducts,
  getAllCategoryProducts,
  getAllOrders,
  getAllProductsToDashboard,
  getAllUsers,
  getOrderById,
  getSubcategoriesByCategory,
  updatedInventories,
  updateProduct,
} from "@/components/dashboard/services/index";
import { queryClient } from "@/pages/_app";
import { IProduct, IUserType, OrderType } from "@/types/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { OrderIdType } from "../services/type";

export const useGetAllProductsToDashboard = (page: number) => {
  return useQuery<IProduct[]>({
    queryKey: ["all-product-dashboard", page],
    queryFn: () => getAllProductsToDashboard(page),
  });
};

export const usePostDataProducts = () => {
  return useMutation({
    mutationKey: ["products"],
    mutationFn: createProducts,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
    },
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
    enabled: !!categoryId,
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

export const useGetOrderById = (id: string) => {
  return useQuery<OrderIdType>({
    queryKey: ["orders", id],
    queryFn: () => getOrderById(id),
  });
};

export const useEditData = () => {
  return useMutation({
    mutationKey: ["edit-data"],
    mutationFn: ({ id, product }: { id: string; product: FormData }) =>
      updateProduct(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
    },
  });
};

export const useUpdateInventory = () => {
  const { t } = useTranslation();

  return useMutation({
    mutationFn: updatedInventories,
    onSuccess: () => {
      toast.success(t("dashboard.modal.edit_success"));
      queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
    },
    onError: () => {
      toast.error(t("dashboard.modal.edit_error"));
    },
  });
};
