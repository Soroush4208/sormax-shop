import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <>
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
