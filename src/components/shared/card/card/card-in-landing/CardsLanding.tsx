import IconView from "@/components/shared/card/icon-view/IconView";
import IconHeart from "@/components/shared/card/icon-wishlist/IconHeart";
import useStore from "@/store/useStore";
import { formatNumber } from "@/utils";
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

function CardsLanding({
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
          backdropFilter: "blur(1.5px)",
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
        <IconView color="white" productID={productId} />
        <IconHeart color="white" colorCheck="red" />
      </Box>
      <Link href={`/products/${productId}`} passHref target="_blank">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
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
                  color: quantity === 0 ? "#e5e5e5" : "inherit",
                  textDecorationLine: quantity === 0 ? "line-through" : "",
                }}
              >
                {formatNumber(priceProduct, language)}
                {language === "fa" ? " تومان" : " $"}
              </Typography>
            )}
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default CardsLanding;
