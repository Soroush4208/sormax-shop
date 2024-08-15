import { queryClient } from "@/pages/_app";
import { useMutation } from "@tanstack/react-query";
import { newOrder, updatedInventories } from "../services";

export const usePostOrder = () => {
  return useMutation({
    mutationKey: ["order-users"],
    mutationFn: newOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-orders"],
      });
    },
  });
};

export const useUpdatedInventories = (
  updated: { id: string; quantity: number }[]
) => {
  return useMutation({
    mutationKey: ["products"],
    mutationFn: () => updatedInventories(updated),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-products"],
      });
    },
  });
};
