import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiReducer from "@/modules/ui/slice";
import authReducer from "@/modules/auth/slice";
import { authApi } from "@/modules/auth/api";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
