import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "./Components/login";
import AdminLogin from "./Components/adminlogin";

import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
