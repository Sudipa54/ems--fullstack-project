import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import { router } from "./router/routes";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
