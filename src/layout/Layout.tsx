import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/Header";
import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>𝑺𝒐𝒓𝒎𝒂𝒙</title>
      </Head>
      <Header />
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: "30px",
          pt: "75px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
