import ManagementIcon from "@/assets/svg/management.svg";
import { getRoleCookie, getUserName } from "@/components/login/services";
import useStore from "@/store/useStore";
import { ProfileMenuType } from "@/types/types";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu, MenuItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
  const username = getUserName();

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: direction === "rtl" ? "left" : "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: direction === "rtl" ? "left" : "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ mt: "50px" }}
    >
      {isRole === "ADMIN" ? (
        <>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "45px",
              ":hover": { color: "red" },
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
              ":hover": { color: "red" },
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
              ":hover": { color: "red" },
            }}
            onClick={handleMenuClose}
          >
            <Typography>{username}</Typography>
            <AccountCircle />
          </MenuItem>

          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              ":hover": { color: "red" },
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
              ":hover": { color: "red" },
            }}
            onClick={handleMenuClose}
          >
            {t("header.wishList")}
            <FavoriteBorderIcon />
          </MenuItem>
          <Link href={"/cart"}>
            <MenuItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                ":hover": { color: "red" },
              }}
              onClick={handleMenuClose}
            >
              {t("header.Payments")}
              <PaidIcon />
            </MenuItem>
          </Link>
          <MenuItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              ":hover": { color: "red" },
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
