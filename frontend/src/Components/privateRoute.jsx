// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   return localStorage.getItem("valid") ? children : <Navigate to="/" />;
// };

// export default PrivateRoute;
import React from "react";

function PrivateRoute({ children }) {
  // This version of PrivateRoute does not perform any checks and will directly render the children components
  return children;
}

export default PrivateRoute;
