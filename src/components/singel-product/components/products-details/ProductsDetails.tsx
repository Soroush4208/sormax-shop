import { ProductsType } from "@/components/home/hooks/type";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import ColorsProducts from "@/components/singel-product/components/products-details/colors/ColorsProducts";
import useStore from "@/store/useStore";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ServicesBoxProducts from "../services-box-products/ServicesBoxProducts";
import Insurance from "./insurance-box/Insurance";

function ProductsDetails({ product }: { product: ProductsType[] }) {
  const language = useStore((state) => state.language);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const { t } = useTranslation();
  const formatNumber = (number: number) => {
    const lang = language;
    return lang === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  const handleIncreaseProduct = (productQuantity: number) => {
    if (quantityProduct < productQuantity) {
      setQuantityProduct(quantityProduct + 1);
    }
  };

  const handleDecreaseProduct = () => {
    if (quantityProduct > 0) {
      setQuantityProduct(quantityProduct - 1);
    }
  };

  return (
    <Box
      sx={{ width: "100%", minHeight: "100vh", position: "relative", mt: 5 }}
    >
      {product?.map((product) => (
        <Box key={product._id}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 1,
              p: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                [language === "fa" ? "left" : "right"]: 10,
              }}
            >
              <IconHeart color="black" colorCheck="red" size="35px" />
            </Box>
            <Image
              src={`http://${product.images[0]}`}
              alt={product.name}
              width={450}
              height={600}
            />
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "95%",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      component="h2"
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.name}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    {t("products.color")} :
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <ColorsProducts />
                  </Box>
                </Box>
                <Divider sx={{ mt: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    py: 3,
                    backgroundColor: product.quantity === 0 ? "#e2b7b7" : "",
                    borderRadius: product.quantity === 0 ? "10px" : 0,
                    px: product.quantity === 0 ? "10px" : "",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    {t("products.price")} :
                  </Typography>
                  {product.quantity === 0 && (
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "25px",
                        color: "red",
                        fontWeight: "bold",
                      }}
                    >
                      {t("products.quantityStatus")}
                    </Typography>
                  )}
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      color: product.quantity === 0 ? "red" : "black",
                    }}
                  >
                    {formatNumber(product.price)}
                    {language === "fa" ? " تومان" : " $"}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Insurance />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    py: 2,
                    borderRadius: "50px",
                    ":hover": { backgroundColor: "#e0e0e0", color: "black" },
                    fontWeight: "bold",
                    fontSize: "20px",
                    gap: 2,
                  }}
                  disabled={product.quantity === 0 || quantityProduct === 0}
                >
                  {t("products.addToCart")}
                  <ShoppingCartIcon />
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #e0e0e0",
                    borderRadius: "40px",
                    px: "10px",
                    bgcolor: product.quantity === 0 ? "#e0e0e0" : "white",
                  }}
                >
                  <AddIcon
                    fontSize="large"
                    onClick={() => handleIncreaseProduct(product.quantity)}
                    sx={{
                      cursor:
                        quantityProduct < product.quantity
                          ? "pointer"
                          : "not-allowed",
                      color:
                        quantityProduct < product.quantity
                          ? "inherit"
                          : "#e0e0e0",
                      width: "50px",
                    }}
                  />
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{
                      fontSize: "30px",
                      px: "10px",
                      py: "10px",
                      width: "60px",
                      textAlign: "center",
                    }}
                  >
                    {formatNumber(quantityProduct)}
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  {quantityProduct === 1 ? (
                    <DeleteIcon
                      fontSize="large"
                      onClick={handleDecreaseProduct}
                      sx={{
                        cursor: quantityProduct > 0 ? "pointer" : "not-allowed",
                        color: quantityProduct > 0 ? "red" : "#e0e0e0",
                        width: "50px",
                      }}
                    />
                  ) : (
                    <RemoveIcon
                      fontSize="large"
                      onClick={handleDecreaseProduct}
                      sx={{
                        cursor: quantityProduct > 0 ? "pointer" : "not-allowed",
                        color: quantityProduct > 0 ? "inherit" : "#e0e0e0",
                        width: "50px",
                      }}
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider />
          <ServicesBoxProducts />
          <Divider />
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{ width: "20px", height: "30px", bgcolor: "black", my: 3 }}
            />
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              {t("products.introduction")}
            </Typography>
          </Box>

          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "justify", fontSize: "19px" }}
          >
            {product.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default ProductsDetails;
