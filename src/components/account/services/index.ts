import { getIdCookie } from "@/components/login/services";
import axios from "@/utils/axiosConfig";

export async function getUserInfo() {
  const userId = getIdCookie();
  const { data } = await axios.get(`/users/${userId}`);
  return data.data.user;
}

export async function getAllOrder() {
  try {
    const response = await axios.get(`/orders?limit=all&sort=-createdAt}`);
    return response.data.data.orders;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
