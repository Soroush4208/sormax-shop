import SVG_BG from "@/assets/svg/wave (3).svg";
import { ProductsType } from "@/components/home/hooks/type";
import CardsLandingMobile from "@/components/shared/card/card/card-in-landing-mobile/CardsLandingMobile";
import CardsLanding from "@/components/shared/card/card/card-in-landing/CardsLanding";
import Clock from "@/components/shared/clock/Clock";
import Logo from "@/layout/header/Logo/Logo";
import useStore from "@/store/useStore";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function NewProducts({ data }: { data: ProductsType[] }) {
  const { t } = useTranslation();
  const language = useStore((state) => state.language);
  const isRTL = language === "fa";
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
          {t("home.newProducts.title")}
        </Typography>
      </Box>
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
          mt: 2,
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
            sx={{ fontWeight: "bold", fontSize: { xs: "18px", md: "30px" } }}
          >
            {t("home.newProducts.name")}
          </Typography>
          <Clock fontSize="18px" />
        </Box>
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            overflowY: "hidden",
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
            {data?.slice(0, 15).map((product: ProductsType) => (
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
            {data?.map((product: ProductsType) => (
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
    </>
  );
}

export default NewProducts;
