import {
  getAccessCookie,
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
  removeUserName,
} from "@/components/login/services";
import DrawerMenu from "@/layout/header/Logo/drawer/Drawer";
import Logo from "@/layout/header/Logo/Logo";
import MobileMenu from "@/layout/header/MobileMenu/MobileMenu";
import ModalSearch from "@/layout/header/ModalSearch/ModalSearch";
import NavigationMenu from "@/layout/header/NavigationMenu/NavigationMenu";
import ProfileMenu from "@/layout/header/ProfileMenu/ProfileMenu";
import SearchBar from "@/layout/header/SearchBar/SearchBar";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import SwitchTheme from "@/layout/header/SwitchTheme/SwitchTheme";
import useStore from "@/store/useStore";
import { removeAccessTokenCookie, removeRefreshTokenCookie } from "@/utils";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const direction = useStore((state) => state.direction);
  const iconButtonStyles = direction === "rtl" ? { ml: "5px" } : { mr: "5px" };
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLoggedIn = getAccessCookie();
  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    if (isLoggedIn) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push("/login");
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMenuGoToDashboard = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    router.push("/dashboard");
  };

  const handleLogout = () => {
    removeAccessTokenCookie();
    removeRefreshTokenCookie();
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    removeUserName();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${t("swal.title")}`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <Box sx={{ position: "fixed", width: "100%", zIndex: 150 }}>
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
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Logo />
            </Box>
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <DrawerMenu />
            </Box>
            <NavigationMenu />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                <SearchBar />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", py: "40px" }}>
                <SwitchLang />
                <SwitchTheme />
                <IconButton
                  sx={{
                    display: { xs: "flex", lg: "none" },
                    alignItems: "center",
                  }}
                  size="large"
                  edge="end"
                  color="inherit"
                >
                  <ModalSearch />
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  sx={iconButtonStyles}
                >
                  <ShoppingCartIcon />
                </IconButton>
                <Box onClick={handleProfileMenuOpen} color="inherit">
                  {isLoggedIn ? (
                    <AccountCircle />
                  ) : (
                    <Button variant="outlined" color="inherit">
                      <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                        {t("sign_up.title")} | {t("sign_in.title")}
                      </Box>
                      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                        <LoginIcon />
                      </Box>
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <ProfileMenu
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
          handleLogout={handleLogout}
          handleMenuGoToDashboard={handleMenuGoToDashboard}
        />
        <MobileMenu
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          handleProfileMenuOpen={handleProfileMenuOpen}
        />
      </Box>
    </Box>
  );
};

export default Header;
