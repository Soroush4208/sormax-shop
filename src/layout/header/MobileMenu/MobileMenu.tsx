import { MobileMenuType } from "@/types/types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
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
      <Link href={"/account?tab=0"}>
        <MenuItem
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
          onClick={handleMobileMenuClose}
        >
          {t("header.profile")}
          <AccountCircle />
        </MenuItem>
      </Link>
      <Link href={"/account?tab=1"}>
        <MenuItem
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
          onClick={handleMobileMenuClose}
        >
          {t("header.Orders")}
          <ShoppingBagIcon />
        </MenuItem>
      </Link>
      <Link href={"/account?tab=2"}>
        <MenuItem
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
          onClick={handleMobileMenuClose}
        >
          {t("header.wishList")}
          <FavoriteBorderIcon />
        </MenuItem>
      </Link>
      <Link href={"/cart"}>
        <MenuItem
          sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}
          onClick={handleMobileMenuClose}
        >
          {t("header.Payments")}
          <PaidIcon />
        </MenuItem>
      </Link>
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
