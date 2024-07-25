import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import IconAddToCart from "../../icon-add-to-cart/IconAddToCart";
import IconHeart from "../../icon-wishlist/IconHeart";

type ICardProps = {
  src: string;
  alt: string;
  nameProduct: string;
  priceProduct: number;
};

function CardsLandingMobile({
  src,
  alt,
  nameProduct,
  priceProduct,
}: ICardProps) {
  const language = useStore((state) => state.language);
  const isRTL = language === "fa";

  const formatNumber = (number: number) => {
    const lang = language;
    return lang === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <Box
      sx={{
        height: "230px",
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        p: 2,
        zIndex: 100,
        borderRadius: "10px",
        minWidth: "200px",
        width: "200px", // Fixed width for horizontal scrolling
        position: "relative",
      }}
    >
      <Box>
        <Image src={src} alt={alt} width={130} height={130} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: isRTL ? 10 : "auto",
          right: isRTL ? "auto" : 10,
          top: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconHeart color="black" colorCheck="red" />
        <IconAddToCart color="black" colorCheck="green" />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
        >
          {nameProduct}
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            bottom: 5,
            left: isRTL ? 10 : "auto",
            right: isRTL ? "auto" : 10,
          }}
        >
          {formatNumber(priceProduct)}
          {language === "fa" ? " تومان" : " $"}
        </Typography>
      </Box>
    </Box>
  );
}

export default CardsLandingMobile;
