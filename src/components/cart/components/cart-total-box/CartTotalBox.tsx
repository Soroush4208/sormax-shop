import useCartStore from "@/store/useCartStore";
import useStore from "@/store/useStore";
import { Box, Button, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function CartTotalBox() {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const total = useCartStore((state) => state.total);

  const formatNumber = (number: number) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <Box
      sx={{
        minWidth: "350px",
        width: "100%",
        borderRadius: "5px",
        boxShadow: 3,
      }}
    >
      <Typography
        sx={{
          py: 1.6,
          px: 3,
          fontSize: "20px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "black",
          borderRadius: "5px 5px 0 0",
        }}
      >
        {t("cart.cart.title")}
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 1,
          ":hover": { color: "black", bgcolor: "#e5e5e5" },
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {t("cart.cart.subTotal")}
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {formatNumber(total)}
          {language === "fa" ? " تومان " : " $ "}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 1,
          ":hover": { color: "black", bgcolor: "#e5e5e5" },
          fontSize: "18px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {t("cart.cart.discount")}
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          ---
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 3,
          py: 1,
          ":hover": { color: "black", bgcolor: "#e5e5e5" },
          fontSize: "18px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {t("cart.cart.total")}
        </Typography>
        <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
          {formatNumber(total)}
          {language === "fa" ? " تومان " : " $ "}
        </Typography>
      </Box>

      <Button
        disabled={total === 0}
        fullWidth
        sx={{
          ":hover": {
            color: "white",
            backgroundColor: "black",
            fontWeight: "bold",
          },
          transition: "background-color  0.3s ease-in-out",
          textAlign: "center",
          py: 2,
          cursor: "pointer",
          fontWeight: "bold",
          borderTop: "1px solid #e5e5e5",
          borderRadius: "0 0 5px 5px",
          color: "black",
        }}
      >
        <Link href={"/checkout"}>{t("cart.cart.button")}</Link>
      </Button>
    </Box>
  );
}

export default CartTotalBox;
