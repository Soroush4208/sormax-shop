import OrderUserAccount from "@/components/account/components/order-user/OrderUserAccount";
import UserInfoAccount from "@/components/account/components/user-info/UserInfoAccount";
import WishListUserAccount from "@/components/account/components/wishlist-user/WishListUserAccount";
import {
  getUserName,
  removeAccessCookie,
  removeIdCookie,
  removeRoleCookie,
} from "@/components/login/services";
import useStore from "@/store/useStore";
import { removeAccessTokenCookie, removeRefreshTokenCookie } from "@/utils";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

const AnimatedTab = styled(Tab)(() => ({
  transition: "all 0.3s ease",
  width: 150,
  color: "black",
  "&.Mui-selected": {
    color: "red",
  },
  "&.Mui-selected.Mui-focusVisible": {
    color: "black",
  },
}));

function TabCharts() {
  const [value, setValue] = useState(0);
  const language = useStore((state) => state.language);
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const username = getUserName();
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab) {
      setValue(parseInt(tab as string));
    }
  }, [tab]);
  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    removeAccessTokenCookie();
    removeRefreshTokenCookie();
    removeAccessCookie();
    removeIdCookie();
    removeRoleCookie();
    localStorage.clear();
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

  return (
    <Box
      sx={{
        display: "flex",
        height: "800px",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        aria-label="animated vertical tabs"
        sx={{
          borderColor: "divider",
          borderRadius: "10px 10px 0 0",
          color: "white",
          height: isMobile ? "auto" : "100%",
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <AnimatedTab
          icon={<AccountCircleIcon fontSize="large" />}
          label={username}
          value={0}
        />
        <AnimatedTab
          icon={<ShoppingBagIcon fontSize="large" />}
          label={t("header.Orders")}
          value={1}
        />
        <AnimatedTab
          icon={<FavoriteIcon fontSize="large" />}
          label={t("header.wishList")}
          value={2}
        />
        <Button
          onClick={handleLogout}
          color="warning"
          sx={{
            display: "flex",
            flexDirection: "column",
            position: isMobile ? "static" : "absolute",
            bottom: isMobile ? "auto" : 0,
            ml: language === "fa" ? 0 : 5,
            mr: language === "fa" ? 5 : 0,
          }}
        >
          <LogoutIcon fontSize="large" />
          <Typography>{t("header.logout")}</Typography>
        </Button>
      </Tabs>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
        }}
      >
        {value === 0 && <UserInfoAccount />}
        {value === 1 && <OrderUserAccount />}
        {value === 2 && <WishListUserAccount />}
      </Box>
    </Box>
  );
}

export default TabCharts;
