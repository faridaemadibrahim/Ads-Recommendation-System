import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/pages/login";
import RegisterPage from "../features/auth/pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
