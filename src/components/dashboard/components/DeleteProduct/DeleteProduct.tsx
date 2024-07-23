import { queryClient } from "@/pages/_app";
import axios from "@/utils/axiosConfig";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

function DeleteProduct({ row }: any) {
  const { t } = useTranslation();

  async function handleDelete(_id: string) {
    console.log(_id);
    const result = await Swal.fire({
      title: t("dashboard.swal.title.title"),
      text: t("dashboard.swal.title.text"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: t("dashboard.swal.confirmButtonText"),
      cancelButtonText: t("dashboard.swal.cancelButtonText"),
    });
    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/products/${_id}`);
        queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
        console.log(response);
        Swal.fire({
          title: t("dashboard.swal.deleted.title"),
          text: t("dashboard.swal.deleted.text"),
          icon: "success",
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
        Swal.fire({
          title: t("dashboard.swal.deleted.title"),
          text: t("dashboard.swal.deleted.text"),
          icon: "success",
        });
      }
    } else {
      queryClient.invalidateQueries({ queryKey: ["all-product-dashboard"] });
      Swal.fire({
        title: t("dashboard.swal.canceled.title"),
        text: t("dashboard.swal.canceled.text"),
        icon: "info",
      });
    }
  }

  return (
    <Button
      sx={{ padding: 0, minWidth: "auto" }}
      color="inherit"
      onClick={() => handleDelete(row._id)}
    >
      <DeleteIcon />
    </Button>
  );
}

export default DeleteProduct;
