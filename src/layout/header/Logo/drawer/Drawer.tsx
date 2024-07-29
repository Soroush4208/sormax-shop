import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import { pages } from "@/layout/header/index";
import useStore from "@/store/useStore";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DrawerMenu() {
  const direction = useStore((state) => state.direction);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        p: 2,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ display: "flex", mb: 2, alignItems: "center", gap: 2 }}>
        <Image src={SormaxLogo.src} width={50} height={50} alt="SormaxLogo" />
        <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
          {t("header.name")}
        </Typography>
      </Box>
      {pages.map((item) => (
        <Link key={item[0]} href={item[1]} passHref>
          <Button
            sx={{ color: "black", width: "100%", justifyContent: "start" }}
          >
            <Typography>{t(`${item[0]}`)}</Typography>
          </Button>
          <Divider />
        </Link>
      ))}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </Button>
      <Drawer
        anchor={direction === "rtl" ? "right" : "left"}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
