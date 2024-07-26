import {
  getAccessTokenCookie,
  getRefreshTokenCookie,
  removeAccessTokenCookie,
  removeRefreshTokenCookie,
  setAccessTokenCookie,
} from "@/utils/index";
import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    const token = getAccessTokenCookie();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = getRefreshTokenCookie();
      try {
        const response = await axios.post(
          "http://localhost:8000/api/refreshToken",
          { token: refreshToken }
        );
        const { accessToken } = response.data;
        setAccessTokenCookie(accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        console.log("Refresh token failed:", refreshError);
        removeAccessTokenCookie();
        removeRefreshTokenCookie();
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default request;
