// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./app";
import "./global.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
