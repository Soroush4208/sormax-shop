import IconAddToCart from "@/components/shared/card/icon-add-to-cart/IconAddToCart";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type ICardProps = {
  src: string;
  alt: string;
  nameProduct: string;
  priceProduct: number;
};

function CardsLanding({ src, alt, nameProduct, priceProduct }: ICardProps) {
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
        backgroundColor: "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        p: 2,
        zIndex: 100,
        borderRadius: "10px",
        minWidth: 200,
        position: "relative",
        overflow: "hidden",
        "&:hover .icon-heart": {
          opacity: 1,
        },
        "&:hover::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "revert",
          filter: "blur",
          zIndex: 50,
          cursor: "pointer",
        },
      }}
    >
      <Box
        className="icon-heart"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          transition: "opacity 0.6s ease",
          zIndex: 100,
          display: "flex",
        }}
      >
        <IconAddToCart color="white" colorCheck="yellowgreen" />
        <IconHeart color="white" colorCheck="red" />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Image src={src} alt={alt} width={150} height={150} />
      </Box>
      <Box sx={{ height: "70px" }}>
        <Typography
          sx={{
            whiteSpace: "wrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            height: "50px",
            maxWidth: "360px",
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

export default CardsLanding;
