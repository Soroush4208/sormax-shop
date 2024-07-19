import LoadingShopGif from "@/assets/gif/logo/Gif Shop Logo.gif";
import {
  getIsLoadingShopCookie,
  setIsLoadingShopCookie,
} from "@/components/shared/loadingShop/index";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const LoadingShop = () => {
  if (!getIsLoadingShopCookie()) {
    setIsLoadingShopCookie(true);
  }
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialLoadingState = getIsLoadingShopCookie();
    setIsLoading(initialLoadingState);
    console.log(initialLoadingState);
    if (initialLoadingState) {
      const timer = setTimeout(() => {
        setIsLoadingShopCookie(false);
        setIsLoading(false);
      }, 3000);
      setIsLoadingShopCookie(false);

      return () => clearTimeout(timer);
    }
  }, []);
  setIsLoadingShopCookie(false);

  if (!isLoading) {
    return null;
  }

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
