import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
import complaintsReducer from "./complaints/complaintsSlice";
import fineReducer from "./fines/fineSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaints: complaintsReducer,
    fines: fineReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
