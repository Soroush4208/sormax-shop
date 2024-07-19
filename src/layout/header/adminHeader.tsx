import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import {
  getAccessCookie,
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
} from "@/components/Login/services";
import { removeAccessTokenCookie, removeRefreshTokenCookie } from "@/utils";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTranslation } from "react-i18next";
import ModalSearch from "./modalSearch/ModalSearch";
import SwitchLang from "./SwitchLang/SwitchLang";
import SwitchTheme from "./SwitchTheme/SwitchTheme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: theme.spacing(0, theme.direction === "rtl" ? "0 2 0 3" : "0 3 0 2"),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  display: "flex",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight:
      theme.direction === "rtl" ? `calc(1em + ${theme.spacing(4)})` : undefined,
    paddingLeft:
      theme.direction === "ltr" ? `calc(1em + ${theme.spacing(4)})` : undefined,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AdminHeader: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isLoggedIn = getAccessCookie();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
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

  const handleLogout = () => {
    removeAccessTokenCookie();
    removeRefreshTokenCookie();
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    setAnchorEl(null);
    handleMobileMenuClose();
    location.reload();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: "50px" }}
    >
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.profile")}
        <AccountCircle />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.Orders")}
        <ShoppingBagIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.wishList")}
        <FavoriteBorderIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.Payments")}
        <PaidIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleLogout}
      >
        {t("header.logout")}
        <LogoutIcon />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ mt: "40px" }}
    >
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.profile")}
        <AccountCircle />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.Orders")}
        <ShoppingBagIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.wishList")}
        <FavoriteBorderIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        {t("header.Payments")}
        <PaidIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleLogout}
      >
        {t("header.logout")}
        <LogoutIcon />
      </MenuItem>
    </Menu>
  );

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
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Link href={"/"}>
                <Image
                  src={SormaxLogo.src}
                  width={50}
                  height={50}
                  alt="SormaxLogo"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Search>
                  <StyledInputBase
                    placeholder={`${t("Search")} …`}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                </Search>
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
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  color="inherit"
                >
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Box>
  );
};

export default AdminHeader;
