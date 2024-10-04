import Login from "./Components/login";
import AdminLogin from "./Components/adminlogin";
import Dashboard from "./Components/dashboard";
import Employee from "./Components/employee";
import Category from "./Components/category";
import Profile from "./Components/profile";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/employee" element={<Employee />} />
        <Route path="/dashboard/category" element={<Category />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
  console.log("App");
}

export default App;
