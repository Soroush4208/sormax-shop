import {
  getAccessCookie,
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
} from "@/components/Login/services";
import Logo from "@/layout/header/Logo/Logo";
import MobileMenu from "@/layout/header/MobileMenu/MobileMenu";
import ModalSearch from "@/layout/header/ModalSearch/ModalSearch";
import NavigationMenu from "@/layout/header/NavigationMenu/NavigationMenu";
import ProfileMenu from "@/layout/header/ProfileMenu/ProfileMenu";
import SearchBar from "@/layout/header/SearchBar/SearchBar";
import SwitchLang from "@/layout/header/SwitchLang/SwitchLang";
import SwitchTheme from "@/layout/header/SwitchTheme/SwitchTheme";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useRouter } from "next/router";
import React, { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();
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
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    setAnchorEl(null);
    handleMobileMenuClose();
    location.reload();
  };

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
            <Logo />
            <NavigationMenu />
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
                  color="inherit"
                >
                  <ModalSearch />
                </IconButton>
                <IconButton size="large" edge="end" color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  {isLoggedIn ? (
                    <AccountCircle />
                  ) : (
                    <Button variant="outlined" color="inherit">
                      {t("sign_up.title")} | {t("sign_in.title")}
                      <LoginIcon />
                    </Button>
                  )}
                </IconButton>
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
