import { createBrowserRouter } from "react-router-dom";
import { Attendance, Register } from "../screens";

export const ROOT = "/";
export const REGISTER = "/register";
export const ATTENDANCE = "/attendance";

export const router = createBrowserRouter([
  { path: ROOT, element: <Register /> },
  { path: REGISTER, element: <Register /> },
  { path: ATTENDANCE, element: <Attendance /> },
]);
