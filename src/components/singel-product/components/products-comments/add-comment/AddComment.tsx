import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormValues {
  comment: string;
  rating: number;
}

function AddComment() {
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("New Comment:", data.comment);
    console.log("New Rating:", data.rating);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          width: { xs: "100%", lg: "300px" },
          height: "auto",
          p: 2,
          border: "1px solid #e0e0e0",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 2 }}>
          {t("products.addComment")}
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder={t("products.commentPlaceholder")}
          {...register("comment", { required: true })}
          sx={{ mb: 2 }}
        />
        <Rating {...register("rating", { required: true })} sx={{ mb: 2 }} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: "black",
            color: "white",
            ":hover": { backgroundColor: "#e0e0e0", color: "black" },
            fontWeight: "bold",
            fontSize: "18px",
            gap: 2,
          }}
        >
          {t("products.submit")}
        </Button>
      </Box>
    </form>
  );
}

export default AddComment;
