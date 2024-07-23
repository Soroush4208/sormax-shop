import { useEditData } from "@/components/dashboard/hooks";
import useStore from "@/store/useStore";
import { IProduct } from "@/types/types";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

interface TextFieldsEditProductsProps {
  product: IProduct;
  setOpen: (open: boolean) => void;
}

function TextFieldsEditProducts({
  product,
  setOpen,
}: TextFieldsEditProductsProps) {
  const language = useStore((state) => state.language);
  const { register, handleSubmit } = useForm<IProduct>({
    defaultValues: product,
  });

  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mutation = useEditData();

  const onSubmit = (data: IProduct) => {
    if (product) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("quantity", data.quantity.toString());
      formData.append("price", data.price.toString());
      formData.append("brand", data.brand);
      formData.append("category", product.category._id);
      formData.append("subcategory", product.subcategory._id);
      formData.append("description", data.description);
      if (
        fileInputRef.current &&
        fileInputRef.current.files &&
        fileInputRef.current.files.length > 0
      ) {
        formData.append("images", fileInputRef.current.files[0]);
      }

      mutation.mutate(
        { id: product._id, product: formData },
        {
          onSuccess: () => {
            toast.success(t("dashboard.modal.edit_success"));
            setOpen(false);
          },
          onError: () => {
            toast.error(t("dashboard.modal.edit_error"));
          },
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.category")}
            defaultValue={product.category.name}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.subcategory")}
            defaultValue={product.subcategory.name}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.name")}
            {...register("name")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.brand")}
            {...register("brand")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.description")}
            {...register("description")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.price")}
            {...register("price", { valueAsNumber: true })}
            InputProps={{
              inputProps: {
                lang: language === "fa" ? "fa-IR" : "en-US",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.quantity")}
            {...register("quantity", { valueAsNumber: true })}
            InputProps={{
              inputProps: {
                lang: language === "fa" ? "fa-IR" : "en-US",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth type="file" inputRef={fileInputRef} />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant="outlined" color="warning">
          {t("dashboard.modal.save")}
          <IconButton>
            <SaveIcon color="warning" />
          </IconButton>
        </Button>
      </Box>
    </form>
  );
}

export default TextFieldsEditProducts;
