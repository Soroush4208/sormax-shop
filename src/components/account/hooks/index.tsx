import { getAllOrder, getUserInfo } from "@/components/account/services/index";
import { OrderIdType } from "@/components/dashboard/services/type";
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => getUserInfo(),
  });
};

export const useGetAllOrdersUser = () => {
  return useQuery<OrderType>({
    queryKey: ["orders"],
    queryFn: getAllOrder,
  });
};
