import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useEffect } from "react";

// import PaymentDetails from "@/components/cart/components/payment-details/PaymentDetails";
import useCartStore from "@/store/useCartStore";
import useShipmentCostStore from "@/store/useShipmentCostStore";
import useStore from "@/store/useStore";
import DynamicThemeFormProvider from "@/themes/DynamicThemeFormProvider";
import { formatNumber } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function UserOrder() {
  const cartItems = useCartStore((state) => state.cart);
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const total = useCartStore((state) => state.total);
  const shipmentCost = useShipmentCostStore((state) => state.shipmentCost);
  const setGrandTotal = useCartStore((state) => state.setGrandTotal);

  useEffect(() => {
    setGrandTotal(shipmentCost);
  }, [shipmentCost, total, setGrandTotal]);

  return (
    <Box sx={{ boxShadow: 2, p: 2 }}>
      <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 1 }}>
        {t("checkout.order_box.title")}
      </Typography>
      <Box
        sx={{
          height: "350px",
          overflow: "hidden",
          overflowY: "scroll",
          border: "1px solid #e5e5e5",
          borderRadius: "5px",
          p: 2,
          bgcolor: "#f9f9f9",
        }}
      >
        {cartItems?.map((item) => (
          <Link href={`/products/${item._id}`}>
            <Box
              key={item._id}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: 2,
                backgroundColor: "white",
                borderBottom: "1px solid #e5e5e5",
                borderRadius: "5px",
                ":hover": { color: "tomato", cursor: "pointer" },
                boxShadow: 1,
                mb: 1,
              }}
            >
              <Box
                sx={{ position: "relative", width: "120px", height: "120px" }}
              >
                <Image
                  src={`http://${item?.image}`}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "8px" }}
                />
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
                  {item.name}
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
                    {formatNumber(item.price, language)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, my: 2 }}>
        <DynamicThemeFormProvider>
          <TextField
            id="filled-textarea"
            label={t("checkout.order_box.discount")}
            placeholder={t("checkout.order_box.input_discount")}
            multiline
            fullWidth
          />
          <Button
            variant="contained"
            sx={{
              width: "200px",
              fontSize: "18px",
              fontWeight: "bold",
              py: 1.5,
              backgroundColor: "black",
              ":hover": { backgroundColor: "#4d4d4d" },
            }}
          >
            {t("checkout.order_box.button_discount")}
          </Button>
        </DynamicThemeFormProvider>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {t("checkout.order_box.subTotal")}
          </Typography>
          <Typography>{formatNumber(total, language)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {t("checkout.order_box.discount")}
          </Typography>
          <Typography>{formatNumber(0, language)}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {t("checkout.order_box.shipment")}
          </Typography>
          <Typography>{formatNumber(shipmentCost, language)}</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            my: 2,
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {t("checkout.order_box.subTotal")}
          </Typography>
          <Typography>
            {formatNumber(total + shipmentCost, language)}
          </Typography>
        </Box>
      </Box>
      <a href={"/payment"}>
        <Button
          variant="contained"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            py: 1.5,
            backgroundColor: "black",
            ":hover": { backgroundColor: "#4d4d4d" },
          }}
          fullWidth
        >
          {t("checkout.order_box.button")}
        </Button>
      </a>
    </Box>
  );
}
