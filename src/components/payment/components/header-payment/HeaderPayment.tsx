import SHMAN_KISH from "@/assets/image/saman-kish.png";
import SHAPARAK from "@/assets/image/shaparak.png";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function HeaderPayment() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image src={SHAPARAK} alt="logo-" width={100} height={100} />
      <Typography
        sx={{ fontSize: "18px", fontWeight: "bold", color: "#75bfe6" }}
      >
        {t("payment.title")}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <SwitchLang />
        <Image src={SHMAN_KISH} alt="logo-" width={100} height={100} />
      </Box>
    </Box>
  );
}

export default HeaderPayment;
