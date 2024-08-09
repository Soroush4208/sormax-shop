import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type ICardProductsProps = {
  srcImage: string;
  altImage: string;
  nameProduct: string;
  priceProduct: number;
  quantity?: number;
  maxWidthXs?: number;
  maxWidthSm?: number;
  productId: string;
};

function Card({
  srcImage,
  altImage,
  nameProduct,
  priceProduct,
  quantity = 1,
  maxWidthXs = 250,
  maxWidthSm = 250,
  productId,
}: ICardProductsProps) {
  const language = useStore((state) => state.language);
  const isRTL = language === "fa";
  const { t } = useTranslation();
  const formatNumber = (number: number) => {
    return language === "fa"
      ? new Intl.NumberFormat("fa-IR").format(number)
      : new Intl.NumberFormat("en-US").format(number);
  };

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: { xs: maxWidthXs, sm: maxWidthSm },
        px: 2,
        py: 1,
        boxShadow: 1,
        ":hover": { boxShadow: 4, color: "tomato" },
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <Link href={`/products/${productId}`} passHref target="_blank">
        <Box
          sx={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
        >
          <Image src={srcImage} alt={altImage} width={300} height={300} />
          <Typography
            sx={{
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              height: "50px",
              maxWidth: "200px",
              mb: 4,
              mt: 2,
              fontWeight: "bold",
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
              color: quantity === 0 ? "#e5e5e5" : "inherit",
              textDecorationLine: quantity === 0 ? "line-through" : "",
            }}
          >
            {formatNumber(priceProduct)}
            {language === "fa" ? " تومان" : " $"}
          </Typography>
        </Box>
      </Link>

      <Box
        sx={{
          position: "absolute",
          left: isRTL ? 1 : "auto",
          right: isRTL ? "auto" : 1,
          top: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconHeart color="black" colorCheck="red" />
      </Box>

      {quantity === 0 && (
        <Typography
          sx={{
            position: "absolute",
            top: 15,
            right: -65,
            textAlign: "center",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
            rotate: "35deg",
            backgroundColor: "red",
            py: 1,
            px: 10,
          }}
        >
          {t("products.quantityStatus")}
        </Typography>
      )}
    </Box>
  );
}

export default Card;
