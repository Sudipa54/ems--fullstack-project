import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("valid");
    navigate("/", { replace: true });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-start p-4">
          {/* Hamburger menu button */}
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </button>
          {/* Title next to the hamburger menu */}
          <span className="ml-4 text-xl font-semibold whitespace-nowrap dark:text-white">
            Employee Management System
          </span>
        </div>
        {/* Sidebar navigation, hidden or shown based on state */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute bg-gray-50 dark:bg-gray-800 h-full shadow-md z-10`}
        >
          <div className="p-4 flex items-center justify-center">
            <Link
              to="/dashboard/home"
              className="text-2xl font-bold text-white"
            >
              Code With Sudipa
            </Link>
          </div>
          <ul className="flex flex-col p-4 space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard/home"
                className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/employee"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                onClick={() => console.log("Navigating to Employee")}
              >
                Manage Employees
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/category"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li onClick={handleLogout}>
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                Logout
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="main-content"
        style={{ marginLeft: "250px", padding: "20px" }}
      >
        <Outlet /> {/* This will render child routes/components */}
      </div>
    </div>
  );
}

export default Dashboard;
