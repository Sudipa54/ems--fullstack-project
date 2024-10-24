import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import Login from "../Components/login";
import AdminLogin from "../Components/admin-login";
import Dashboard from "../Components/dashboard";
import EmployeeDetail from "../Components/employee-detail";
import EmployeeEdit from "../Components/employee-edit";
import Home from "../Components/home";
import Employee from "../Components/employee";
import PrivateRoute from "../Components/private-route";
import Category from "../Components/category";
import Profile from "../Components/profile";
import AddCategory from "../Components/add-category";
import AddEmployee from "../Components/add-employee";

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
    children: [
      { path: "home", element: <Home /> },
      { path: "employee", element: <Employee /> },
      {
        path: "employee/employee-edit/:id",
        element: <EmployeeEdit />,
      },
      { path: "category", element: <Category /> },
      { path: "profile", element: <Profile /> },
      { path: "category/add-category", element: <AddCategory /> },
      { path: "employee/add-employee", element: <AddEmployee /> },
      // Add more nested routes here as needed
    ],
  },
  {
    path: "/employee-detail/:id",
    element: (
      <PrivateRoute>
        <EmployeeDetail />
      </PrivateRoute>
    ),
  },
]);
