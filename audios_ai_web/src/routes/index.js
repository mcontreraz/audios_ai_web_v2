import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "../ui/pages/Dashboard";
import JobList from "../ui/pages/JobList";
import UploadFile from "../ui/pages/UploadFile";

const authProtectedRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/jobList",
    element: <JobList />,
  },
  {
    path: "/uploadFile",
    element: <UploadFile />,
  },
];

const publicRoutes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
];

export { authProtectedRoutes, publicRoutes };
