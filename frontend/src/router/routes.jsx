import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "../Components/login";
import AdminLogin from "../Components/adminLogin";
// import Login from "./Components/login";
// import AdminLogin from "../src/Components/adminLogin";
// import Login from "../src/Components/login";
// import "./global.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
]);
