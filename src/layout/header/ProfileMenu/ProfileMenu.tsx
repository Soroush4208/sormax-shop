import ManagementIcon from "@/assets/svg/management.svg";
import { getRoleCookie } from "@/components/Login/services";
import useStore from "@/store/useStore";
import { ProfileMenuType } from "@/types/types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const ProfileMenu: React.FC<ProfileMenuType> = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  handleLogout,
  handleMenuGoToDashboard,
}) => {
  const { t } = useTranslation();
  const direction = useStore((state) => state.direction);
  const isRole = getRoleCookie();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: "50px", ml: direction === "rtl" ? "120px" : "-10px" }}
    >
      {isRole === "ADMIN" ? (
        <>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "45px",
            }}
            onClick={handleMenuGoToDashboard}
          >
            {t("dashboard.title")}
            <Image
              src={ManagementIcon.src}
              alt="dashboard-icon"
              width={30}
              height={30}
            />
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "45px",
            }}
            onClick={handleLogout}
          >
            {t("header.logout")}
            <LogoutIcon />
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
            onClick={handleMenuClose}
          >
            {t("header.profile")}
            <AccountCircle />
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
            onClick={handleMenuClose}
          >
            {t("header.Orders")}
            <ShoppingBagIcon />
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
            onClick={handleMenuClose}
          >
            {t("header.wishList")}
            <FavoriteBorderIcon />
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
            onClick={handleMenuClose}
          >
            {t("header.Payments")}
            <PaidIcon />
          </MenuItem>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
            }}
            onClick={handleLogout}
          >
            {t("header.logout")}
            <LogoutIcon />
          </MenuItem>
        </>
      )}
    </Menu>
  );
};

export default ProfileMenu;
