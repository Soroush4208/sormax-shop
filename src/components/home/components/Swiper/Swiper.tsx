import useStore from "@/store/useStore";
import { Box } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CustomSwiper() {
  const language = useStore((state) => state.language);
  const direction = useStore((state) => state.direction);
  
  return (
    <Box sx={{ height: { xs: "150", md: "450px" }, zIndex: -1 }}>
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
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            {language === "en" ? (
              <Image
                className="SwiperImage"
                src={`/gif/gif-en-${index + 1}.gif`}
                alt={`Slide ${index + 1}`}
                width={350}
                height={350}
              />
            ) : (
              <Image
                className="SwiperImage"
                src={`/gif/gif-fa-${index + 1}.gif`}
                alt={`Slide ${index + 1}`}
                width={350}
                height={350}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
