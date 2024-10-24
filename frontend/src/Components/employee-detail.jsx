import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeDetail() {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("valid");
    navigate("/");
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

  return employee ? (
    <div>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Employee Management System
          </span>

          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 shadow dark:bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:shadow-none">
            <li>
              <button
                className="block py-2 px-4 text-white bg-blue-700 rounded dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700"
                aria-current="page"
                onClick={handleLogout}
              >
                LogOut
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mx-auto my-4 p-4 max-w-4xl bg-white rounded-lg shadow dark:bg-gray-800">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          Employee Details
        </h3>
        <img
          src={`http://localhost:3000/images/${employee.image}`}
          alt={employee.name}
          className="employee-image"
        />

        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 dark:bg-gray-700">
            <dt className="text-sm font-medium text-gray-500 truncate">Name</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {employee.name}
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 dark:bg-gray-700">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Email
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {employee.email}
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 dark:bg-gray-700">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Address
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {employee.address}
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 dark:bg-gray-700">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Salary
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {employee.salary}
            </dd>
          </div>
          <div className="px-4 py-5 bg-gray-100 shadow rounded-lg overflow-hidden sm:p-6 dark:bg-gray-700">
            <dt className="text-sm font-medium text-gray-500 truncate">
              File Name
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
              {employee.category_id}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default EmployeeDetail;
