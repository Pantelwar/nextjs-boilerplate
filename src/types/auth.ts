import type { ApiResponse } from "./api";

export interface LoginRequest {
  email: string;
  password: string;
}

export type LoginResponse = ApiResponse;
