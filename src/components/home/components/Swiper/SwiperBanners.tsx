import useStore from "@/store/useStore";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerCamera from "../banner/BannerCamera";
import BannerHeadphone from "../banner/BannerHeadphone";
import BannerMobile from "../banner/BannerMobile";
import BannerSmartWatch from "../banner/BannerSmatrtWatch";

export default function SwiperBanners() {
  const direction = useStore((state) => state.direction);
  const { t } = useTranslation();
  const banners = [
    <BannerMobile key="banner1" />,
    <BannerCamera key="banner2" />,
    <BannerHeadphone key="banner3" />,
    <BannerSmartWatch key="banner4" />,
  ];

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
        <Box
          sx={{
            width: "20px",
            height: "30px",
            backgroundColor: "red",
          }}
        />
        <Typography sx={{ fontSize: "25px", fontWeight: "bold", mt: 1 }}>
          {t("home.banners")}
        </Typography>
      </Box>
      <Box sx={{ zIndex: -1 }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          dir={direction}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>{banner}</SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}
