import Header from "@/layout/header/header";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminHeader from "./header/adminHeader";

type AdminLayoutProps = { children: ReactNode };

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <>
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
