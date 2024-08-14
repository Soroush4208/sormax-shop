// services/index.ts
import axios from "@/utils/axiosConfig";

export async function getProducts() {
  try {
    const response = await axios.get("/products");
    return response.data.data.products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
