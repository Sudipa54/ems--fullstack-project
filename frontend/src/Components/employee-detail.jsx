import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeDetail() {
  // State to control the visibility of the menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const navigate = useNavigate();
  // const [user, setUser] = useState();
  // console.log(user);
  // // const id = 11;

  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/employee/logout`)
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/employee/detail/` + id)
      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log("Employee is ", employee);

  // function handleLogout() {
  //   localStorage.removeItem("loginStatus");
  //   Navigate("/");
  // }

  useEffect(() => {
    fetch(`http://localhost:3000/employee/detail/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return employee ? (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Employee Management System
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isOpen}
            onClick={toggleMenu} // Bind the click event to the toggle function
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isOpen ? "block" : "hidden"} w-full`}
            id="navbar-hamburger"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                  aria-current="page"
                  onClick={handleLogout}
                >
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  ) : (
    <div>...Loading ..</div>
  );
}

export default EmployeeDetail;
