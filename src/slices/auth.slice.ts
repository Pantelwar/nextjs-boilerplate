import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  isError: boolean;
  error: string | null;
  login: unknown | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isError: false,
  error: null,
  login: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<unknown>) => {
      state.isAuthenticated = true;
      state.login = action.payload;
    },
    logout: (state: AuthState) => {
      state.isAuthenticated = false;
      state.login = null;
    },
  },
});
