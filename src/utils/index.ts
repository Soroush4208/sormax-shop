import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const getAccessTokenCookie = () => {
  return getCookie("accessToken");
};

export const getRefreshTokenCookie = () => {
  return getCookie("refreshToken");
};

export const setAccessTokenCookie = (value: string) => {
  setCookie("accessToken", String(value), { path: "/" });
};

export const setRefreshTokenCookie = (value: string) => {
  setCookie("refreshToken", String(value), { path: "/" });
};

export const removeAccessTokenCookie = () => {
  deleteCookie("accessToken", { path: "/" });
};

export const removeRefreshTokenCookie = () => {
  deleteCookie("refreshToken", { path: "/" });
};

export const formatNumber = (number: number, language: string) => {
  return language === "fa"
    ? new Intl.NumberFormat("fa-IR").format(number)
    : new Intl.NumberFormat("en-US").format(number);
};
