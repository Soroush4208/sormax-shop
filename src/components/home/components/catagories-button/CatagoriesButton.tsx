import laptop from "@/assets/image/Laptop.png";
import camera from "@/assets/image/camera.png";
import headphone from "@/assets/image/hedphone.png";
import mobile from "@/assets/image/mobile.png";
import monitor from "@/assets/image/monitor.png";
import smart_watch from "@/assets/image/smart-watch.png";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const CatagoriesButton = () => {
  const { t } = useTranslation();
  const categories = [
    {
      id: 1,
      nameCategory: t("categories.mobile"),
      image: mobile,
      href: "/products/mobile",
    },
    {
      id: 2,
      nameCategory: t("categories.laptop"),
      image: laptop,
      href: "/products/laptop",
    },
    {
      id: 3,
      nameCategory: t("categories.camera"),
      image: camera,
      href: "/products/camera",
    },
    {
      id: 4,
      nameCategory: t("categories.smart_watch"),
      image: smart_watch,
      href: "/products/smart-watch",
    },
    {
      id: 5,
      nameCategory: t("categories.monitor"),
      image: monitor,
      href: "/products/monitor",
    },
    {
      id: 6,
      nameCategory: t("categories.headphone"),
      image: headphone,
      href: "/products/headphone",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        my: 10,
        alignItems: "center",
        overflowX: {
          xs: "scroll",
          md: "hidden",
        },
        "::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none",
        scrollbarWidth: "none",
      }}
    >
      {categories.map((category) => (
        <Link href={category.href} key={category.id}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: { xs: 150, md: 150 },
              mx: { xs: 1, md: 2 },
            }}
          >
            <CardActionArea
              sx={{ py: 2, px: 1, ":hover": { backgroundColor: "#ede6e6" } }}
            >
              <Image
                src={category.image}
                alt={category.nameCategory}
                width={150}
                height={150}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="body1"
                  component="h6"
                  color="GrayText"
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                    textAlign: "center",
                    ":hover": { color: "red" },
                  }}
                >
                  {category.nameCategory}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default CatagoriesButton;
