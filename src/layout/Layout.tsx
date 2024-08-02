import Footer from "@/layout/footer/footer";
import Header from "@/layout/header/header";
import useStore from "@/store/useStore";
import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const { i18n } = useTranslation();
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  let lang = { state: { language: "fa", direction: "rtl" }, version: 0 };

  if (typeof window !== "undefined") {
    const storedLang = window.localStorage.getItem("language");
    if (storedLang) {
      lang = JSON.parse(storedLang);
    }
  }

  useEffect(() => {
    setLanguage(lang?.state?.language);
    i18n.changeLanguage(lang?.state?.language);
    document.documentElement.dir =
      lang?.state?.language === "fa" ? "rtl" : "ltr";
  }, []);
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
          pb: "100px",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}
