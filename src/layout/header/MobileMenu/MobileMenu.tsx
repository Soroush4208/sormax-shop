import { MobileMenuType } from "@/types/types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu, MenuItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const MobileMenu: React.FC<MobileMenuType> = ({
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
}) => {
  const { t } = useTranslation();

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-search-account-menu-mobile"
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
        onClick={handleMobileMenuClose}
      >
        {t("header.profile")}
        <AccountCircle />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMobileMenuClose}
      >
        {t("header.Orders")}
        <ShoppingBagIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMobileMenuClose}
      >
        {t("header.wishList")}
        <FavoriteBorderIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMobileMenuClose}
      >
        {t("header.Payments")}
        <PaidIcon />
      </MenuItem>
      <MenuItem
        sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
        onClick={handleMobileMenuClose}
      >
        {t("header.logout")}
        <LogoutIcon />
      </MenuItem>
    </Menu>
  );
};

export default MobileMenu;
