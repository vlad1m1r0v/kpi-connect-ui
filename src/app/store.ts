import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "@/modules/ui/slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
