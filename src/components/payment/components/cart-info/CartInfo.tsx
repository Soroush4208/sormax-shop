import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MainTextFileds from "./main-text-fildes/MainTextFildes";

function CartInfo() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#f2f2f2",
        p: 2,
        minHeight: "700px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PaymentIcon />
          <Typography>{t("payment.cart_info.title")}</Typography>
        </Box>
        <Box>
          <Typography>{t("payment.cart_info.time")} :</Typography>
        </Box>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Box>
        <MainTextFileds />
      </Box>
    </Box>
  );
}

export default CartInfo;
