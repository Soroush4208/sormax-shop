import { pages } from "@/layout/header/index";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const NavigationMenu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        color: "white",
        gap: "10px",
      }}
    >
      {pages.map((item) => (
        <Link key={item[0]} href={item[1]} passHref>
          <Button sx={{ color: "white" }}>
            <Typography>{t(`${item[0]}`)}</Typography>
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default NavigationMenu;
