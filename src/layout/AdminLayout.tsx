import AdminHeader from "@/layout/header/AdminHeader";
import { Box } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

type AdminLayoutProps = { children: ReactNode };

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
      <Head>
        <title>𝑺𝒐𝒓𝒎𝒂𝒙</title>
      </Head>
      <AdminHeader />
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
    </>
  );
}
