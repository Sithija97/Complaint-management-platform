import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
//
import UserPage from "./pages/user";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import Page404 from "./pages/404";
import DashboardAppPage from "./pages/dashboard";
import ComplaintsPage from "./pages/complaints";
import PlannedTasksPage from "./pages/tasks";
import AddFines from "./pages/add-fines";
import FinesPage from "./pages/fines";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <DashboardAppPage /> },
        { path: "user", element: <UserPage /> },
        { path: "complaints", element: <ComplaintsPage /> },
        { path: "tasks", element: <PlannedTasksPage /> },
        { path: "fines", element: <FinesPage /> },
        { path: "add-fines", element: <AddFines /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
