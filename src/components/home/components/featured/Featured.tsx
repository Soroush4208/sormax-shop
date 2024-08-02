import Banner_one from "@/assets/image/Banner (1).png";
import Banner_Two from "@/assets/image/Banner (2).png";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
function Featured() {
  const { t } = useTranslation();
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 4 }}>
        <Box
          sx={{
            width: "20px",
            height: "30px",
            backgroundColor: "red",
          }}
        />
        <Typography sx={{ fontSize: "25px", fontWeight: "bold", mt: 1 }}>
          {t("home.featured.title")}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: "30px", fontWeight: "bold", mt: 2 }}>
        {t("home.featured.text")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          mt: 2,
        }}
      >
        <Box
          component="img"
          src={Banner_one.src}
          alt="banner image"
          sx={{ width: "100%", height: "550px" }}
        />
        <Box
          component="img"
          src={Banner_Two.src}
          alt="banner image"
          sx={{ width: "100%", height: "550px" }}
        />
      </Box>
    </Box>
  );
}

export default Featured;
