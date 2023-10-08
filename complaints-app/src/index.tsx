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
  ReportRequest,
  UserPaymentList,
  PaymentList,
} from "./pages";
import { store } from "./store/store";
import PrivateRoute from "./components/privte-route";
import { ForgotPassword } from "./pages/forgot-password";
import { UserComplaints } from "./pages/user-complaints";
import { UserFines } from "./pages/user-fine";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/users" element={<Users />} />
      {/* </Route> */}
      <Route path="/verify-user" element={<VerifyUser />} />
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/cases" element={<Cases />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/fines" element={<Fines />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/reports" element={<Reports />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/complaints" element={<Complaints />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/profile" element={<UserProfile />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/payment" element={<Payment />} />
      {/* </Route> */}
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/report-request" element={<ReportRequest />} />
      <Route path="/user-complaints" element={<UserComplaints />} />
      <Route path="/user-fines" element={<UserFines />} />
      <Route path="/user-payments" element={<UserPaymentList />} />
      <Route path="/payment-list" element={<PaymentList />} />
      {/* </Route> */}
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
