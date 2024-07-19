// services/index.ts
import axios from "@/utils/axiosConfig";

export async function getProducts() {
  try {
    const response = await axios.get("/products");
    console.log(response.data.data.products);
    return response.data.data.products; // اطمینان از اینکه response.data یک آرایه باشد
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
