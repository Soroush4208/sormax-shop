// services/index.ts
import { ProductsType } from "@/components/home/hooks/type";
import { queryClient } from "@/pages/_app";
import { IProduct } from "@/types/types";
import axios from "@/utils/axiosConfig";

export async function getAllProductsToDashboard(page: number) {
  try {
    const response = await axios.get(`/products?page=${page}&limit=all`);
    return response.data.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function createProducts(formData: ProductsType) {
  try {
    const response = await axios.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating products:", error);
    throw error;
  }
}

export async function getAllCategoryProducts() {
  try {
    const response = await axios.get("/categories");
    console.log(response.data.data.categories);
    return response.data.data.categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getSubcategoriesByCategory(categoryId: string) {
  try {
    const response = await axios.get(`/subcategories?category=${categoryId}`);
    console.log(response.data.data.subcategories);
    return response.data.data.subcategories;
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    throw error;
  }
}

export async function getAllUsers() {
  try {
    const response = await axios.get("/users");
    console.log(response.data.data.users);
    return response.data.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function getAllOrders() {
  try {
    const response = await axios.get("/orders");
    console.log(response.data.data.orders);
    return response.data.data.orders;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export const updateDeliveryStatus = async (
  orderId: string,
  newStatus: boolean
) => {
  try {
    const response = await axios.patch(`/orders/${orderId}`, {
      deliveryStatus: newStatus,
    });
    console.log("Update Successful:", response.data.data.orders);
    return response.data;
  } catch (error) {
    console.error("Error updating delivery status:", error);
    throw error;
  }
};

export const updateProduct = async (
  productId: string,
  updatedData: FormData
) => {
  try {
    const response = await axios.patch(`/products/${productId}`, updatedData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export async function handleDelete(_id: string) {
  try {
    const response = await axios.delete(`/products/${_id}`);
    queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
    return response.data.data.products;
  } catch (error) {
    queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
    console.error("Error deleting product:", error);
  }
}

export async function updatedInventory(product: IProduct) {
  try {
    const { _id, ...rest } = product;
    const res = await axios.patch(`/products/${_id}`, rest);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updatedInventories(products: IProduct[]) {
  try {
    const updatePromises = products.map((item) => updatedInventory(item));
    const responses = await Promise.all(updatePromises);
    return responses;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
