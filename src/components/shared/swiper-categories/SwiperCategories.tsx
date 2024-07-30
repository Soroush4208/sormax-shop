import useStore from "@/store/useStore";
import { Box } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SwiperCategories({
  image,
  number = 4,
}: {
  image: string;
  number?: number;
}) {
  const direction = useStore((state) => state.direction);

  return (
    <Box sx={{ height: { xs: 200, md: 400 }, zIndex: 0 }}>
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
        {[...Array(number)].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 200, md: 400 },
              }}
            >
              <Image
                src={`/images/${image}-${index + 1}.jpg`}
                alt={`Slide ${index + 1}`}
                layout="fill" // Use layout="fill" to fill the container
                objectFit="cover" // Ensures the image covers the container
                objectPosition="center" // Centers the image
                quality={100} // Ensures high quality
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
