import {
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
} from "@/components/Login/services";
import Logo from "@/layout/header/Logo/Logo";
import ModalSearch from "@/layout/header/ModalSearch/ModalSearch";
import SearchBar from "@/layout/header/SearchBar/SearchBar";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import SwitchTheme from "@/layout/header/SwitchTheme/SwitchTheme";
import { removeAccessTokenCookie, removeRefreshTokenCookie } from "@/utils";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const AdminHeader: React.FC = () => {
  const { t } = useTranslation();
  const handleLogout = () => {
    removeAccessTokenCookie();
    removeRefreshTokenCookie();
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${t("swal.title")}`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
  };
  const menuId = "primary-search-account-menu";
  return (
    <Box sx={{ position: "fixed", width: "100%" }}>
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: "solid 1px",
          backgroundColor: "black",
        }}
      >
        <AppBar
          position="static"
          sx={{
            maxWidth: "1440px",
            backgroundColor: "transparent",
            mx: "auto",
            height: "65px",
          }}
        >
          <Toolbar>
            <Tooltip title={t("header.name")}>
              <Logo />
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchBar />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", py: "40px" }}>
                <SwitchLang />
                <SwitchTheme />
                <IconButton
                  sx={{
                    display: { xs: "flex", sm: "none" },
                    alignItems: "center",
                  }}
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ModalSearch />
                </IconButton>
                <Tooltip title={t("header.logout")}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleLogout}
                    color="inherit"
                  >
                    <PowerSettingsNewIcon color="error" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default AdminHeader;
