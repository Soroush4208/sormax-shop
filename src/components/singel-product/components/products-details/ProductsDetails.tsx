import { ProductsType } from "@/components/home/hooks/type";
import IconNotifications from "@/components/shared/card/icon-notifications/IconNotifications";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import ColorsProducts from "@/components/singel-product/components/products-details/colors/ColorsProducts";
import useCartStore from "@/store/useCartStore"; // import the cart store
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import ServicesBoxProducts from "../services-box-products/ServicesBoxProducts";
import Insurance from "./insurance-box/Insurance";

function ProductsDetails({ product }: { product: ProductsType[] }) {
  const language = useStore((state) => state.language);
  const [quantityProduct, setQuantityProduct] = useState(0);
  const { t } = useTranslation();

  const addToCart = useCartStore((state) => state.addToCart);

  const handleIncreaseProduct = () => {
    if (quantityProduct < 3) {
      setQuantityProduct(quantityProduct + 1);
    } else {
      toast.error(t("cart.alert"));
    }
  };

  const handleDecreaseProduct = () => {
    if (quantityProduct > 0) {
      setQuantityProduct(quantityProduct - 1);
    }
  };

  const handleAddToCart = (product: ProductsType) => {
    const productToAdd = {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: quantityProduct,
      image: product.images,
    };
    addToCart(productToAdd);
    setQuantityProduct(0);
    toast.success(t("products.alert_success"));
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
                    alignItems: "center",
                    py: 3,
                    backgroundColor: product.quantity === 0 ? "red" : "",
                    borderRadius: product.quantity === 0 ? "10px" : 0,
                    px: product.quantity === 0 ? "10px" : "",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      display: product.quantity === 0 ? "none" : "flex",
                    }}
                  >
                    {t("products.price")} :
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      display: product.quantity === 0 ? "flex" : "none",
                      color: "white",
                    }}
                  >
                    {t("products.quantityStatus")}
                  </Typography>
                  {product.quantity === 0 && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "25px",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {t("products.quantityStatusNotify")}
                      </Typography>
                      <IconNotifications />
                    </Box>
                  )}
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      fontSize: "22px",
                      fontWeight: "bold",
                      display: product.quantity === 0 ? "none" : "flex",
                    }}
                  >
                    {formatNumber(product.price, language)}
                    {language === "fa" ? " تومان" : " $"}
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Insurance quantity={product.quantity} />
              </Box>
              <Box
                sx={{
                  display: product.quantity === 0 ? "none" : "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 2,
                  my: 2,
                }}
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
                  onClick={() => handleAddToCart(product)}
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
                    onClick={handleIncreaseProduct}
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
                    {formatNumber(quantityProduct, language)}
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
