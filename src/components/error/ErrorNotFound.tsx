import Error_Image from "@/assets/gif/error/gif error Shop Logo.gif";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function ErrorPageNotFound() {
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    if (router.asPath !== "/404") {
      router.replace("/404");
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f5e0",
      }}
    >
      <Box
        component="img"
        src={Error_Image.src}
        alt="error image"
        sx={{
          width: "30%",
          minWidth: "400px",
        }}
      />
      <Typography sx={{ fontSize: "40px", color: "#e5472f" }}>
        {t("error.title")}
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          width: "50%",
          color: "black",
          textAlign: "center",
        }}
      >
        {t("error.description")}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          my: "40px",
          mt: "150px",
          ":hover": { background: "#1976d2", color: "white" },
          borderRadius: "8px",
        }}
      >
        <Link href={"/"}>
          <p>{t("error.button")}</p>
        </Link>
      </Button>
    </Box>
  );
}

export default ErrorPageNotFound;
