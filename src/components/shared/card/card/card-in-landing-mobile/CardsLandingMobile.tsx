import IconView from "@/components/shared/card/icon-view/IconView";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

type ICardProps = {
  src: string;
  alt: string;
  nameProduct: string;
  priceProduct: number;
  productId: string;
  quantity: number;
};

function CardsLandingMobile({
  src,
  alt,
  nameProduct,
  priceProduct,
  productId,
  quantity,
}: ICardProps) {
  const language = useStore((state) => state.language);
  const isRTL = language === "fa";
  const { t } = useTranslation();
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
      <Link href={`/products/${productId}`} passHref>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Box>
            <Image src={src} alt={alt} width={130} height={130} />
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
            {quantity === 0 ? (
              <Typography
                sx={{
                  position: "absolute",
                  bottom: 5,
                  left: isRTL ? 10 : "auto",
                  right: isRTL ? "auto" : 10,
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                {t("products.quantityStatus")}
              </Typography>
            ) : (
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
            )}
          </Box>
        </Box>
      </Link>
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
        <IconView color="black" productID={productId} />
      </Box>
    </Box>
  );
}

export default CardsLandingMobile;
