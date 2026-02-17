// axios/axios-instance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add auth interceptor to include the token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const basicToken = localStorage.getItem("basicToken");

    if (basicToken) {
      // Add the Basic Auth header with the stored token
      config.headers.Authorization = `Basic ${basicToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
