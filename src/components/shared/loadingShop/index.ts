import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const getIsLoadingShopCookie = () => {
  return getCookie("isLoadingShop") === "true";
};

export const setIsLoadingShopCookie = (value: boolean) => {
  const isLoadingShopValue = value ? "true" : "false";
  setCookie("isLoadingShop", isLoadingShopValue, { path: "/" });
};

export const removeIsLoadingShopCookie = () => {
  deleteCookie("isLoadingShop", { path: "/" });
};
