import type { AxiosInstance } from "axios";
import { authSlice } from "slices/auth.slice";
import { store } from "store";

export function attachInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        store.dispatch(authSlice.actions.logout());
      }
      return Promise.reject(error);
    }
  );
}
