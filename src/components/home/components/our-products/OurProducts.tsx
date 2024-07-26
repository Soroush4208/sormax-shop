import Card from "@/components/shared/card/card/card/Card";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ProductsType } from "../../hooks/type";

function OurProducts({ data: products }: { data: ProductsType[] }) {
  const { t } = useTranslation();
  console.log(products);
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: "20px",
            height: "30px",
            backgroundColor: "red",
          }}
        />
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {t("home.our_product.title")}
        </Typography>
      </Box>
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "space-around",
        }}
      >
        {products?.slice(65, 75).map((product) => (
          <Card
            key={product._id}
            srcImage={`http://${product.images[0]}`}
            altImage={product.name}
            nameProduct={product.name}
            priceProduct={product.price}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mx: "auto" }}>
        <Grid container spacing={1} sx={{ mt: "20px", alignItems: "center" }}>
          <Grid item xs={4}>
            <Box sx={{ borderBottom: "1px solid ", borderColor: "black" }} />
          </Grid>
          <Grid item xs={4}>
            <Link href={"/products"}>
              <Button
                fullWidth
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  px: 4,
                  py: 1,
                  ":hover": { backgroundColor: "gray", color: "black" },
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {t("home.our_product.button")}
              </Button>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ borderBottom: "1px solid ", borderColor: "black" }} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default OurProducts;
