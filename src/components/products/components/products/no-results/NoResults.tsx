import img_noResult from "@/assets/image/cartoon-no-results-found.png";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const NoResults = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "40%",
          left: { xs: "60%", sm: "57%" },
          transform: "translate(-50%, -50%)",
          fontSize: { xs: "20px", sm: "23px", md: "28px" },
        }}
      >
        {t("products.noResults")}
      </Typography>
      <Image src={img_noResult} alt="img no result" width={700} height={500} />
    </Box>
  );
};

export default NoResults;
