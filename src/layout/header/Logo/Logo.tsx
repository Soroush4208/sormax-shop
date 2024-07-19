import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => (
  <Link href="/">
    <Image src={SormaxLogo.src} width={50} height={50} alt="SormaxLogo" />
  </Link>
);

export default Logo;
