import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isError: false,
    at: null as string | null,
    error: null as string | null,
    login: null as unknown,
  },
  reducers: {
    login(state, action: PayloadAction<unknown>) {
      state.isAuthenticated = true;
      state.login = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.login = null;
    },
  },
});
