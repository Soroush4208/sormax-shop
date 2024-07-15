import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function FooterTabs({ text }: { text: string }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1} sx={{ mt: "20px", alignItems: "center" }}>
        <Grid item xs={4}>
          <Box sx={{ borderBottom: "1px solid", borderColor: "grey.400" }} />
        </Grid>
        <Grid item xs={4}>
          <Typography sx={{ textAlign: "center" }}>{t(text)}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ borderBottom: "1px solid", borderColor: "grey.400" }} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ mt: "20px", display: "flex", justifyContent: "space-around" }}
      >
        <Grid item xs={6} sm={6} md={5}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: "10px",
            }}
          >
            <Typography sx={{ fontSize: "17px", pt: "4px" }}>Google</Typography>
            <GoogleIcon sx={{ mr: 1 }} />
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={5}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: "10px",
            }}
          >
            <Typography sx={{ fontSize: "17px", pt: "4px" }}>
              Facebook
            </Typography>
            <FacebookIcon sx={{ mr: 1 }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FooterTabs;
