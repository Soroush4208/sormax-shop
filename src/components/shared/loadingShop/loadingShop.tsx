import LoadingShopGif from "@/assets/gif/logo/Gif Shop Logo.gif";
import { Box } from "@mui/material";

const LoadingShop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f5e0",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{ minWidth: "300px" }}
        component="img"
        src={LoadingShopGif.src}
        alt="loading image"
      />
    </Box>
  );
};

export default LoadingShop;
