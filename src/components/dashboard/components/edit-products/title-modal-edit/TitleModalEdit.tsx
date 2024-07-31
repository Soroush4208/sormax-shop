import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function TitleModalEdit() {
  const { t } = useTranslation();

  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={1} sx={{ mt: "20px", alignItems: "center" }}>
        <Grid item xs={3}>
          <Box sx={{ borderBottom: "1px solid ", borderColor: "red" }} />
        </Grid>
        <Grid item xs={6}>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {t("dashboard.modal.edit")}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ borderBottom: "1px solid ", borderColor: "red" }} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default TitleModalEdit;
