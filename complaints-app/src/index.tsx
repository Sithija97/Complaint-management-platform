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
  Complaints,
  Fines,
  Home,
  Login,
  ForgotPassword,
  Payment,
  Register,
  Reports,
  UserProfile,
  VerifyUser,
  ReportRequest,
  UserPaymentList,
  PaymentList,
  UsersList,
  ComplaintList,
  FineList,
  ReportsList,
  UserReportRequestList,
  ReportRequestList,
  UploadReport,
} from "./pages";
import { store } from "./store/store";
import PrivateRoute from "./components/privte-route";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* <Route path="" element={<PrivateRoute />}> */}
      <Route path="/users-list" element={<UsersList />} />
      {/* </Route> */}
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/verify-user" element={<VerifyUser />} />
      <Route path="/fines" element={<Fines />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports-list" element={<ReportsList />} />
      <Route path="/report-request" element={<ReportRequest />} />
      <Route path="/upload-report" element={<UploadReport />} />
      <Route path="/report-request-list" element={<ReportRequestList />} />
      <Route path="/user-report-requests" element={<UserReportRequestList />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/complaints-list" element={<ComplaintList />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payments-list" element={<PaymentList />} />
      <Route path="/fines-list" element={<FineList />} />
      <Route path="/user-payments" element={<UserPaymentList />} />
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
