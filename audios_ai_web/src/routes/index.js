import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../ui/pages/Dashboard";

const authProtectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

const publicRoutes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
];

export { authProtectedRoutes, publicRoutes };
