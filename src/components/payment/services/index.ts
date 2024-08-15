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
  deliveryDate: string;
}

export async function newOrder(data: OrdersType) {
  try {
    const response = await axios.post("/orders", data);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}

export async function updatedInventories(
  updated: { id: string; quantity: number }[]
) {
  try {
    const products = await Promise.all(
      updated.map(({ id }) => axios.get(`/products/${id}`))
    );
    const updatedData = updated.map(({ id, quantity }, index) => {
      const currentQuantity = products[index].data.data.product.quantity;
      console.log(currentQuantity);
      const newQuantity = currentQuantity - quantity;
      return axios.patch(`/products/${id}`, { quantity: newQuantity });
    });
    const responses = await Promise.all(updatedData);
    return responses.map((response) => response.data.data);
  } catch (error) {
    console.error("Error updating inventories:", error);
    throw error;
  }
}
