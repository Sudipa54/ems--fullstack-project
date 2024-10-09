import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const loginStatus = localStorage.getItem("loginStatus");
  if (loginStatus) {
    return <div>{children}</div>;
  }
  return <Navigate to="/" />;
}

export default PrivateRoute;
