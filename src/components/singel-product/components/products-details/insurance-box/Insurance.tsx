import { Box, Checkbox, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Insurance({ quantity }: { quantity: number }) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: quantity === 0 ? "none" : "flex",
        alignItems: "center",
        py: 2,
        px: 1,
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
      }}
    >
      <Checkbox color="default" />
      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
        {t("products.insurance")}
      </Typography>
    </Box>
  );
}

export default Insurance;
