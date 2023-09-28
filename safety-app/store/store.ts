import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
import complaintReducer from "./complaints/complaintsSlice";
import emergencyReducer from "./emergency/emergencySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaints: complaintReducer,
    emergencies: emergencyReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
