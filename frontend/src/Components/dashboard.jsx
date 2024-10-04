import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/auth/logout`)
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      });
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-start p-4">
          {/* Hamburger menu button */}
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12h18M3 6h18M3 18h18"
              />
            </svg>
          </button>
          {/* Title next to the hamburger menu */}
          <span class="ml-4 text-xl font-semibold whitespace-nowrap dark:text-white">
            Employee Management System
          </span>
        </div>
        {/* Sidebar navigation, hidden or shown based on state */}
        <div
          class={`${
            isOpen ? "block" : "hidden"
          } absolute bg-gray-50 dark:bg-gray-800 h-full shadow-md z-10`}
        >
          <ul class="flex flex-col p-4 space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                aria-current="page"
              >
                Dashboard
              </a>
            </li>
            <li>
              <Link
                to="/dashboard/employee"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Manage Employees
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/category"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li onClick={handleLogout}>
              <div class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                Logout
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Dashboard;