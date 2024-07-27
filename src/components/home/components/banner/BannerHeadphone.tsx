import mobile from "@/assets/image/hedphone.png";
import BG_SVG from "@/assets/svg/wave (4).svg";
import Clock from "@/components/shared/clock/Clock";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function BannerHeadphone() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "400px",
        bgcolor: "black",
        mt: 3,
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        p: 4,
        position: "relative",
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={BG_SVG.src}
        sx={{
          position: "absolute",
          width: "100%",
          bottom: -10,
          left: "-5px",
          display: { xs: "none", sm: "flex" },
        }}
      />
      <Box sx={{ zIndex: 10 }}>
        <Image src={mobile} alt="mobile" width={300} height={300} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "300px",
        }}
      >
        <Typography
          sx={{ color: "white", fontWeight: "bold", fontSize: "28px" }}
        >
          {t("home.banner.textHeadphone")}
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          AULA S506
        </Typography>
        <Box sx={{ zIndex: 10, mx: "auto" }}>
          <Clock fontSize="20px" />
        </Box>
        <Link href={"/products/669e7c8ac3e4455d0c47d5c5"}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "100px",
              bgcolor: "yellowgreen",
              color: "black",
              ":hover": { bgcolor: "green", color: "white" },
              width: "350px",
            }}
          >
            {t("home.banner.button")}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default BannerHeadphone;
