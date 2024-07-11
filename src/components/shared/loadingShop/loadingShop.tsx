import LoadingShopGif from "@/assets/gif/logo/Gif Shop Logo.gif";
import { Box } from "@mui/material";

function LoadingShop() {
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
        sx={{ minWidth: "300px" }}
        component="img"
        src={LoadingShopGif.src}
        alt="error image"
      />
    </Box>
  );
}

export default LoadingShop;
