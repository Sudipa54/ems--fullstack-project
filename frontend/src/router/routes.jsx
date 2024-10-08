import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "../Components/login";
import AdminLogin from "../Components/adminLogin";
import Dashboard from "../Components/dashboard";
import EmployeeDetail from "../Components/employeeDetail";
import EmployeeEdit from "../Components/employeeEdit";
import AddEmployee from "../Components/addEmployee";
import AddCategory from "../Components/addCategory";
import Home from "../Components/home";
import Employee from "../Components/employee";
import PrivateRoute from "../Components/PrivateRoute";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
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
