import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  console.log(user);
  function updateEmail(event) {
    const currentEmail = event.target.value;
    setUser((currentValue) => ({ ...currentValue, email: currentEmail }));
  }
  function updatePassword(event) {
    const currentPassword = event.target.value;
    setUser((currentValue) => ({
      ...currentValue,
      password: currentPassword,
    }));
  }
  console.log(JSON.stringify(user));
  //localhost:3000/auth/adminlogin
  function loginUser() {
    fetch("http://localhost:3000/auth/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())

      .then((data) => {
        // localStorage.setItem("abcd", 1234);
        if (!data.loginStatus) {
          throw new Error("An error occurred while fetching the data");
        }

        localStorage.setItem("loginStatus", true);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  }
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loginStatus");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={updateEmail}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            // required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={updatePassword}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              // required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          onClick={loginUser}
          // type="submit"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
      <div>
        {/* <div>Back to Home </div> */}
        {/* <input type = "button" value = "Back to Home" onClick = {() => { */}
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
}

export default AdminLogin;
