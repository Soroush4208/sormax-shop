import { queryClient } from "@/pages/_app";
import { useMutation } from "@tanstack/react-query";
import { newOrder } from "../services";

export const usePostOrder = () => {
  return useMutation({
    mutationKey: ["users"],
    mutationFn: newOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["all-orders"],
      });
    },
  });
};
