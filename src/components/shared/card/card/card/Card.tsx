import IconAddToCart from "@/components/shared/card/icon-add-to-cart/IconAddToCart";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

type ICardProductsProps = {
  srcImage: string;
  altImage: string;
  nameProduct: string;
  priceProduct: number;
};

function Card({
  srcImage,
  altImage,
  nameProduct,
  priceProduct,
}: ICardProductsProps) {
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
        position: "relative",
        maxWidth: 250,
        px: 2,
        py: 1,
        boxShadow: 1,
        ":hover": { boxShadow: 3 },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Image src={srcImage} alt={altImage} width={300} height={300} />
      <Box
        sx={{
          position: "absolute",
          left: isRTL ? 1 : "auto",
          right: isRTL ? "auto" : 1,
          top: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconHeart color="black" colorCheck="red" />
        <IconAddToCart color="black" colorCheck="green" />
      </Box>
      <Typography
        sx={{
          whiteSpace: "wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          height: "50px",
          maxWidth: "360px",
          mb: 3,
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
  );
}

export default Card;
