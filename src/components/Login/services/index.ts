import axios from "@/utils/axiosConfig";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

// ارسال درخواست به سرور برای ثبت نام
export const signUpUser = async (bodyRequest: any) => {
  try {
    const response = await axios.post("/auth/signup", bodyRequest);
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

export const signInUser = async (bodyRequest: any) => {
  try {
    const response = await axios.post("/auth/login", bodyRequest);
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during signup:", error);
    throw error;
  }
};

//! Cookies

export const getAccessCookie = () => {
  return getCookie("access") === "true";
};

export const getIdCookie = () => {
  return getCookie("userId");
};

export const getRoleCookie = () => {
  return getCookie("role");
};
export const getUserName = () => {
  return getCookie("username");
};

export const setAccessCookie = (value: boolean) => {
  const accessValue = value ? "true" : "false";
  setCookie("access", accessValue, { path: "/" });
};

export const setIdCookie = (value: number) => {
  setCookie("userId", String(value), { path: "/" });
};

export const setRoleCookie = (value: string) => {
  setCookie("role", String(value), { path: "/" });
};
export const setUserName = (value: string) => {
  setCookie("username", String(value), { path: "/" });
};

export const removeAccessCookie = () => {
  deleteCookie("access", { path: "/" });
};

export const removeIdCookie = () => {
  deleteCookie("userId", { path: "/" });
};

export const removeRoleCookie = () => {
  deleteCookie("role", { path: "/" });
};
export const removeUserName = () => {
  deleteCookie("username", { path: "/" });
};
