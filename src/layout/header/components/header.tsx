import SormaxLogo from "@/assets/image/Sormax_Logo.png";
import { ShopTheme } from "@/themes/ShopTheme";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import MoreIcon from "@mui/icons-material/MoreVert";
import PaidIcon from "@mui/icons-material/Paid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
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
import * as React from "react";
import { useTranslation } from "react-i18next";
import SwitchLang from "./SwitchLang/SwitchLang";
import SwitchTheme from "./SwitchTheme/SwitchTheme";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "100px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const pages = [
  ["header.home", "/"],
  ["header.products", "/products"],
  ["header.contactUs", "/contact-us"],
  ["header.aboutUs", "/about-us"],
];

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
        <AccountCircle />
        {t("header.profile")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <ShoppingBagIcon /> {t("header.Orders")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <FavoriteBorderIcon />
        {t("header.wishList")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <PaidIcon />
        {t("header.Payments")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <LogoutIcon /> {t("header.logout")}
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
        <AccountCircle />
        {t("header.profile")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <ShoppingBagIcon /> {t("header.Orders")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <FavoriteBorderIcon />
        {t("header.wishList")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <PaidIcon />
        {t("header.Payments")}
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMenuClose}
      >
        <LogoutIcon /> {t("header.logout")}
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
          fontFamily: ShopTheme.typography.fontFamily,
        }}
      >
        <AppBar
          position="static"
          sx={{
            maxWidth: "1440px",
            backgroundColor: "transparent",
            mx: "auto",
          }}
        >
          <Toolbar>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Link href={"/"}>
                <Image
                  src={SormaxLogo.src}
                  width={50}
                  height={50}
                  alt="SormaxLogo"
                />
              </Link>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  color: "white",
                  gap: "10px",
                }}
              >
                {pages.map((item) => (
                  <Button sx={{ color: "white" }} key={item[0]}>
                    <Link href={item[1]}>{t(`${item[0]}`)}</Link>
                  </Button>
                ))}
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <SwitchLang />
              <SwitchTheme />
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
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
            <Box
              sx={{ display: { xs: "flex", sm: "none" }, alignItems: "center" }}
            >
              <SwitchTheme />
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Box>
  );
};

export default Header;
