import type { ApiResponse } from "types/api";
import type { LoginRequest, LoginResponse } from "types/auth";

import { PrivateService } from "./private.service";

class AuthService extends PrivateService {
  login(request: LoginRequest): Promise<LoginResponse> {
    return this.client.post(`/login`, request);
  }

  logout(): Promise<ApiResponse> {
    return this.client.delete(`/logout`);
  }
}

export const authService = new AuthService();
