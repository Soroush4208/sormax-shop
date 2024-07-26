import SVG_BG from "@/assets/svg/wave (3).svg";
import CardsLandingMobile from "@/components/shared/card/card/card-in-landing-mobile/CardsLandingMobile";
import CardsLanding from "@/components/shared/card/card/card-in-landing/CardsLanding";
import Clock from "@/components/shared/clock/Clock";
import Logo from "@/layout/header/Logo/Logo";
import useStore from "@/store/useStore";
import { IProduct } from "@/types/types";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function NewProducts({ data }: any) {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const isRTL = language === "fa";
  // const formattedDate = moment().format("L");
  const scrollRef = useRef<any>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "360px", sm: "340px" },
        backgroundColor: "black",
        color: "white",
        p: 2,
        borderRadius: "10px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
        alignItems: "center",
        position: "relative",
        mb: 4,
        overflow: "hidden",
      }}
    >
      <Image src={SVG_BG} alt="SVG_BG" objectFit="cover" className="SVG_BG" />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", sm: "column" },
          alignItems: "center",
          gap: 1,
          minWidth: 150,
        }}
      >
        <Logo />
        <Typography
          sx={{ fontWeight: "bold", display: { xs: "none", sm: "flex" } }}
        >
          {t("home.newProducts.name")}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          {t("home.newProducts.title")}
        </Typography>
        <Clock fontSize="18px" />
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden", // Prevent vertical scrolling
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          minWidth: 200,
          mb: 5,
          position: "relative",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {data?.slice(0, 15).map((product: IProduct) => (
            <CardsLanding
              key={product._id}
              src={`http://${product.images[0]}`}
              alt={product.name}
              nameProduct={product.name}
              priceProduct={product.price}
            />
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: 2 }}>
          {data?.map((product: IProduct) => (
            <CardsLandingMobile
              key={product._id}
              src={`http://${product.images[0]}`}
              alt={product.name}
              nameProduct={product.name}
              priceProduct={product.price}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: 1,
          position: "absolute",
          bottom: 0,
          left: isRTL ? 20 : "auto",
          right: isRTL ? "auto" : 20,
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        <ArrowRight
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
          }}
          onClick={scrollRight}
        />
        <ArrowLeft
          sx={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "50%",
          }}
          onClick={scrollLeft}
        />
      </Box>
    </Box>
  );
}

export default NewProducts;
