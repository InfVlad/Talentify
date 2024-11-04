import axios from "axios";
import { getState } from "@/store/auth.store";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const apiClient = axios.create({
  baseURL,
});

apiClient.interceptors.request.use((config) => {
  const { token } = getState();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { apiClient };
