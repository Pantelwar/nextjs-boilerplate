import type { AxiosInstance } from "axios";
import axios from "axios";
import { toast } from "react-hot-toast";
import { authSlice } from "slices/auth.slice";
import type { RootState } from "store";
import { store } from "store";

/*
 * Keeping track if refresh token API call is in progress
 * This should stay global across all clients
 * So that if anywhere we get 401, all requests get paused
 */
let isRefreshTokenInProgress = false;
let failedQueue: {
  resolve: (err: unknown) => void;
  reject: (token: unknown) => void;
}[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export class PrivateService {
  public client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  private refreshClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  constructor() {
    // Initializing defaults
    const state: RootState = store.getState();
    this.client.defaults.headers.Authorization = `Bearer ${state.auth.at}`;

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;
        // If response status is unauthorized, that means we attempt to refresh the token once
        if (error.response?.status === 401 && !originalRequest.retry) {
          if (isRefreshTokenInProgress) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return this.client(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }
          isRefreshTokenInProgress = true;
          originalRequest.retry = true;
          return new Promise((resolve, reject) => {
            this.refreshClient
              .post(`/refresh`, null, { withCredentials: true })
              .then(({ data }) => {
                const { at } = data.result;
                store.dispatch(authSlice.actions.login({ at }));
                this.client.defaults.headers.Authorization = `Bearer ${at}`;
                originalRequest.headers.Authorization = `Bearer ${at}`;
                processQueue(null, at);
                resolve(this.client(originalRequest));
              })
              .catch((err) => {
                processQueue(err, null);
                reject(err);
              })
              .finally(() => {
                isRefreshTokenInProgress = false;
              });
          });
        }
        // If response status is forbidden, that means the user has no permissions to perform that action
        if (error.response?.status === 403) {
          toast.error("You are forbidden to perform this action!");
        }
        // If server error, just show the error
        if (error.response?.status === 500) {
          toast.error(error.response.data?.error || "Something went wrong");
        }
        return error;
      }
    );

    this.refreshClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          store.dispatch(authSlice.actions.logout());
        }
        return error;
      }
    );
  }
}
