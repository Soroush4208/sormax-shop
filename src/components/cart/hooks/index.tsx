import { useQuery } from "@tanstack/react-query";
import { CartType, getAllCarts } from "../services";

export const useGetAllCarts = () => {
  return useQuery<CartType>({
    queryKey: ["all-carts"],
    queryFn: getAllCarts,
  });
};
