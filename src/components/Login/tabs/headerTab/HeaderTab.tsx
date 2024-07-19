import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import SwitchTheme from "@/layout/header/SwitchTheme/SwitchTheme";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function HeaderTab() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pb: "8px",
      }}
    >
      <SwitchTheme />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SwitchLang />
        <Link href={"/"}>
          <Image src={SormaxLogo.src} width={50} height={50} alt="SormaxLogo" />
        </Link>
      </Box>
    </Box>
  );
}

export default HeaderTab;
