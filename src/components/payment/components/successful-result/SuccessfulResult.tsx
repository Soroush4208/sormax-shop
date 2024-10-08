import Successful from "@/assets/image/SuccessfulResult.jpg";
import useCartStore from "@/store/useCartStore";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function SuccessfulResult() {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const grandTotal = useCartStore((state) => state.grand_total);
  const clearCart = useCartStore((state) => state.clearCart);
  function handelGoToHome() {
    clearCart();
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        mt: 4,
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "15%",
          left: "45%",
          fontWeight: "bold",
          ":hover": { color: "white" },
          textAlign: "center",
        }}
      >
        {t("payment.successful_result.amount_paid")}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: "27%",
          left: "45%",
          fontWeight: "bold",
          ":hover": { color: "white" },
          textAlign: "center",
        }}
      >
        {formatNumber(grandTotal, language)}
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: "31%",
          left: "47%",
          fontWeight: "bold",
          fontSize: "20px",
          ":hover": { color: "white" },
          textAlign: "center",
        }}
      >
        {language === "fa" ? " تومان " : " $ "}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          fontSize: "25px",
          fontWeight: "bold",
          ":hover": { color: "white" },
        }}
      >
        <Link href={"/"} onClick={handelGoToHome}>
          {t("payment.successful_result.button")}
        </Link>
      </Box>
      <Image
        src={Successful}
        alt="Successful Result"
        width={500}
        height={500}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          mt: 4,
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}
        >
          {t("payment.successful_result.title")}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
          {t("payment.successful_result.desc")}
        </Typography>
      </Box>
    </Box>
  );
}

export default SuccessfulResult;
