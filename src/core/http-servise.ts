import { getCookie } from "@/lib/cookie";
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

// --- Router Setup ---
let router: { navigate: (path: string) => void } | null = null;

export const setRouter = (routerInstance: { navigate: (path: string) => void }): void => {
  router = routerInstance;
};

export const navigateTo = (path: string): void => {
  if (router) {
    router.navigate(path);
  } else {
    console.error("Router is not initialized");
  }
};

// --- Base URLs ---
// Base_url_login : for login
// Base_url_login : for Routes after login
const Base_url_login: string = "";
const Base_url_Api: string = "";

// --- Axios Instances ---
export const httpService: AxiosInstance = axios.create({
  baseURL: Base_url_login,
});

export const httpsInterceptedService: AxiosInstance = axios.create({
  baseURL: Base_url_Api,
});

// --- Request Interceptor ---
httpsInterceptedService.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const token = getCookie<String>("token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// --- Response Interceptor ---
httpsInterceptedService.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    if (error.response?.status === 401) {
      navigateTo("/login");
    }
    return Promise.reject(error);
  }
);
