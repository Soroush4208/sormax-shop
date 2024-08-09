import axios from "@/utils/axiosConfig";

interface Rating {
  rate: number;
  count: number;
}

interface ProductDetails {
  rating: Rating;
  _id: string;
  category: string;
  subcategory: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  description: string;
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  slugname: string;
  __v: number;
}

interface ProductInCart {
  product: ProductDetails;
  count: number;
  _id: string;
}

interface User {
  _id: string;
  firstname: string;
  lastname: string;
  username: string;
  phoneNumber: string;
  address: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartType {
  _id: string;
  user: User;
  products: ProductInCart[];
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export async function getAllCarts() {
  try {
    const response = await axios.get("/carts");
    console.log(response.data.data.carts);
    return response.data.data.carts;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
