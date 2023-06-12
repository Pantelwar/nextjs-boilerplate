import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { publicService } from "services/public.service";
import { appSlice } from "slices/app.slice";
import { authSlice } from "slices/auth.slice";

const reducer = persistReducer(
  {
    key: "root",
    storage,
  },
  combineReducers({
    [appSlice.name]: appSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [publicService.reducerPath]: publicService.reducer,
  })
);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(publicService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
