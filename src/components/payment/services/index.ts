import axios from "@/utils/axiosConfig";
import { CookieValueTypes } from "cookies-next";

export interface ProductsEntity {
  product: string;
  count: number;
}
export interface OrdersType {
  user: CookieValueTypes;
  products?: ProductsEntity[] | null;
  deliveryStatus: boolean;
}

export async function newOrder(data: OrdersType) {
  try {
    const response = await axios.post("/orders", data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}
