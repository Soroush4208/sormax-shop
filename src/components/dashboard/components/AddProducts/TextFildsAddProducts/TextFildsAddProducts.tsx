import {
  useGetAllCategoryToDashboard,
  useGetSubcategories,
} from "@/components/dashboard/hooks";
import { ICategoryTypes, IProduct, ISubCategoryTypes } from "@/types/types";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function TextFieldsAddProducts() {
  const { data: categories } = useGetAllCategoryToDashboard();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "668e9e5417db3dbf85b617c9"
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const { data: subcategories } = useGetSubcategories(selectedCategory);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IProduct>();

  const { t } = useTranslation();

  useEffect(() => {
    if (selectedCategory && subcategories) {
      setSelectedSubCategory(subcategories[0]?._id || "");
      setValue("subcategory", subcategories[0]?._id || "");
    }
  }, [selectedCategory, subcategories, setValue]);

  const onSubmit = (formData: IProduct) => {
    const data = {
      category: formData.category,
      subcategory: formData.subcategory,
      name: formData.name,
      price: +formData.price,
      quantity: +formData.quantity,
      brand: formData.brand,
      description: formData.description,
      images: formData.images,
    };
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined">
            <Select
              {...register("category", {
                required: t("dashboard.modal.error.category"),
              })}
              error={!!errors.category}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories &&
                categories.map((category: ICategoryTypes) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            variant="outlined"
            disabled={selectedCategory === ""}
          >
            <Select
              {...register("subcategory", {
                required: t("dashboard.modal.error.subcategory"),
              })}
              error={!!errors.subcategory}
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
            >
              {subcategories &&
                subcategories.map((subcategory: ISubCategoryTypes) => (
                  <MenuItem key={subcategory._id} value={subcategory._id}>
                    {subcategory.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.name")}
            variant="outlined"
            {...register("name", { required: t("dashboard.modal.error.name") })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.brand")}
            variant="outlined"
            {...register("brand", {
              required: t("dashboard.modal.error.brand"),
            })}
            error={!!errors.brand}
            helperText={errors.brand?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.description")}
            variant="outlined"
            {...register("description", {
              required: t("dashboard.modal.error.description"),
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.price")}
            variant="outlined"
            {...register("price", {
              required: t("dashboard.modal.error.price"),
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label={t("dashboard.modal.quantity")}
            variant="outlined"
            {...register("quantity", {
              required: t("dashboard.modal.error.quantity"),
            })}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            fullWidth
            sx={{ gap: 4, py: "15px" }}
            color="success"
          >
            {t("dashboard.modal.images")}
            <VisuallyHiddenInput
              type="file"
              {...register("images", {
                required: t("dashboard.modal.error.images"),
              })}
            />
          </Button>
          {errors.images && <p>{errors.images.message}</p>}
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {t("dashboard.modal.add")}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TextFieldsAddProducts;
