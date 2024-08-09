import Un_Successful from "@/assets/image/UnSuccessfulResult.jpg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function UnsuccessfulResult() {
  const { t } = useTranslation();
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
      <Image
        src={Un_Successful}
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
          {t("payment.un_successful_result.title")}
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "18px" }}>
          {t("payment.un_successful_result.desc")}
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "25px",
          fontWeight: "bold",
          mt: 4,
          ":hover": { color: "tomato" },
        }}
      >
        <Link href={"/"}>{t("payment.un_successful_result.button")}</Link>
      </Box>
    </Box>
  );
}

export default UnsuccessfulResult;
