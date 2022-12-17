import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice } from "slices/app.slice";
import { authSlice } from "slices/auth.slice";

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
    },
    combineReducers({
      app: appSlice.reducer,
      auth: authSlice.reducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register"],
        ignoredPaths: ["register"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
