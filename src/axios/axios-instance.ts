import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const basicToken = localStorage.getItem("basicToken");

  if (basicToken) {
    config.headers.Authorization = `Basic ${basicToken}`;
  }

  return config;
});

export default axiosInstance;
