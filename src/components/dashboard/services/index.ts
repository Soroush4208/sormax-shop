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
    console.error("Error fetching products:", error);
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
      queryClient.invalidateQueries({ queryKey: ["products-Dashboard"] });
      Swal.fire({
        title: "Deleted",
        text: "Item was deleted successfuly.",
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
