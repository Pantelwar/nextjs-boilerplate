import type { AxiosInstance } from "axios";
import axios from "axios";
import type { ApiResponse } from "types/api";
import type { LoginRequest, LoginResponse } from "types/auth";
import { attachInterceptor } from "utils/interceptor";

class AuthService {
  private client: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

  constructor() {
    attachInterceptor(this.client);
  }

  login(request: LoginRequest): Promise<LoginResponse> {
    return this.client.post(`/login`, request);
  }

  logout(): Promise<ApiResponse> {
    return this.client.delete(`/logout`);
  }
}

export const authService = new AuthService();
