import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => (
  <Tooltip title="Home">
    <Link href="/">
      <Image src={SormaxLogo.src} width={50} height={50} alt="SormaxLogo" />
    </Link>
  </Tooltip>
);

export default Logo;
