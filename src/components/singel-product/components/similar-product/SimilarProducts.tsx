import { ProductsType } from "@/components/home/hooks/type";
import Card from "@/components/shared/card/card/card/Card";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SimilarProductsSlider({
  products,
}: {
  products: ProductsType[];
}) {
  const { t } = useTranslation();
  return (
    <Box marginTop={"16px"} marginBottom={"48px"} height={"403px"}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 7 }}>
        <Box sx={{ width: "20px", height: "30px", bgcolor: "black" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {t("products.similarProducts")}
        </Typography>
      </Box>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1125: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product._id}>
              <Box padding={"1px"} sx={{ mr: "40px" }}>
                <Card
                  nameProduct={product.name}
                  altImage={product.name}
                  priceProduct={product.price}
                  srcImage={`http://${product.images[0]}`}
                  productId={product._id}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
