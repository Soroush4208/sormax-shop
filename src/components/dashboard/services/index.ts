// services/index.ts
import { queryClient } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import Swal from "sweetalert2";

export async function getAllProductsToDashboard() {
  try {
    const response = await axios.get("/products?limit=all");
    console.log(response.data.data.products);
    return response.data.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
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

export async function handleDelete(_id: string) {
  console.log(_id);

  const result = await Swal.fire({
    title: "Sure you want to delete this item?",
    text: "This action is irreversible.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, I'm sure",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`/products/${_id}`);
      queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
      Swal.fire({
        title: "Deleted",
        text: "Item was deleted successfully.",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  } else {
    Swal.fire({
      title: "Canceled",
      text: "Deletion canceled.",
      icon: "info",
    });
  }
}
