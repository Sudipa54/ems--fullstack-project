import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "../Components/login";
import AdminLogin from "../Components/admin-login";
import Dashboard from "../Components/dashboard";
import EmployeeDetail from "../Components/employee-detail";
import EmployeeEdit from "../Components/employee-edit";
import AddEmployee from "../Components/addEmployee";
import AddCategory from "../Components/addCategory";
import Home from "../Components/home";
import Employee from "../Components/employee";
import PrivateRoute from "../Components/private-route";

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
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },

  {
    path: "/employee-detail",
    element: (
      <PrivateRoute>
        <EmployeeDetail />
      </PrivateRoute>
    ),
  },
  {
    path: "/employee",
    element: (
      <PrivateRoute>
        <Employee />
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  // {
  //   path: "/employee-detail",
  //   element: <EmployeeDetail />,
  // },
  // {
  //   path: "/employee-edit",
  //   element: <EmployeeEdit />,
  // },
  // {
  //   path: "/add-employee",
  //   element: <AddEmployee />,
  // },
  // {
  //   path: "/employee",
  //   element: <Employee />,
  // },
]);
