import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Cases,
  Complaints,
  Fines,
  Home,
  Login,
  Payment,
  Register,
  Reports,
  Users,
  UserProfile,
  VerifyUser,
} from "./pages";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
      <Route path="/verify-user" element={<VerifyUser />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/fines" element={<Fines />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/payment" element={<Payment />} />
    </Route>
  )
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
