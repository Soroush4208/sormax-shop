import { IProduct } from "@/types/types";
import { Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function TextFieldsEditProducts() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IProduct>();

  const { t } = useTranslation();
  function onSubmit() {}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.category")} disabled />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.subcategory")}
            disabled
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.name")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.brand")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.description")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.price")} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label={t("dashboard.modal.quantity")} />
        </Grid>
      </Grid>
    </form>
  );
}

export default TextFieldsEditProducts;
