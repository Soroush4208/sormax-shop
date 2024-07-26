import useStore from "@/store/useStore";
import { Box } from "@mui/material";
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

  const banners = [
    <BannerMobile key="banner1" />,
    <BannerCamera key="banner2" />,
    <BannerHeadphone key="banner3" />,
    <BannerSmartWatch key="banner4" />,
  ];

  return (
    <Box sx={{ zIndex: -1}}>
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
  );
}
