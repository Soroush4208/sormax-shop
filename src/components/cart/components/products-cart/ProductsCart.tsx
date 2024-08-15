import useCartStore, { ProductStorType } from "@/store/useCartStore";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const ProductsCart = () => {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const cartProducts = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const decreasesFromCart = useCartStore((state) => state.decreasesFromCart);
  const removeOne = useCartStore((state) => state.removeOne);

  const handleIncreaseProduct = (product: ProductStorType) => {
    const maxAllowedQuantity = 3;
    if (product.quantity < maxAllowedQuantity) {
      addToCart({ ...product, quantity: 1 });
    } else {
      toast.error(t("cart.alert"));
    }
  };

  const handleDecreaseProduct = (product: ProductStorType) => {
    if (product.quantity === 1) {
      removeOne(product._id);
    } else {
      decreasesFromCart({ ...product, quantity: 1 });
    }
  };

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  return (
    <Box sx={{ mb: cartProducts?.length === 0 ? 4 : "" }}>
      <Box
        sx={{
          width: "100%",
          height: "57px",
          backgroundColor: "black",
          borderRadius: "5px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {t("cart.cart_basket")}
        </Typography>
      </Box>
      {cartProducts?.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            mx: "auto",
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
            {t("cart.condition")}
          </Typography>
          <ShoppingBagIcon fontSize="large" />
        </Box>
      ) : (
        <Box sx={{ width: "100%" }}>
          {cartProducts.map((row) => (
            <Box
              key={row._id}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: 2,
                borderRadius: "5px",
                boxShadow: 2,
                transition: "box-shadow 0.3s ease-in-out",
                ":hover": { boxShadow: 4 },
                backgroundColor: "white",
                my: 1,
              }}
            >
              <Box
                sx={{ position: "relative", width: "120px", height: "120px" }}
              >
                <Link href={`/products/${row._id}`}>
                  <Image
                    src={`http://${row?.image}`}
                    alt={row.name}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "8px" }}
                  />
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "100px",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  {row.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "18px", color: "#777", fontWeight: "bold" }}
                  >
                    {formatNumber(row.price, language)}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #e0e0e0",
                      borderRadius: "40px",
                      p: 0.4,
                    }}
                  >
                    <IconButton
                      onClick={() => handleIncreaseProduct(row)}
                      sx={{ p: 0.5 }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <Typography
                      sx={{
                        fontSize: "18px",
                        width: "20px",
                        textAlign: "center",
                        mx: 1,
                      }}
                    >
                      {formatNumber(row.quantity, language)}
                    </Typography>
                    <Divider orientation="vertical" flexItem />
                    <IconButton
                      onClick={() => handleDecreaseProduct(row)}
                      sx={{ p: 0.2 }}
                    >
                      {row.quantity === 1 ? (
                        <DeleteIcon fontSize="small" sx={{ color: "red" }} />
                      ) : (
                        <RemoveIcon fontSize="small" />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductsCart;
