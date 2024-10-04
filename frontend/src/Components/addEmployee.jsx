import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/auth/category`)
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);

    axios
      .post(
        `${import.meta.env.VITE_BACKEND_SERVER_URL}/auth/add_employee`,
        formData
      )
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center mt-3">
      <div className="p-6 rounded-lg w-full max-w-md border shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Add Employee
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="inputName" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter Name"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="inputEmail4" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="inputEmail4"
              placeholder="Enter Email"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="inputPassword4"
              className="block text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="inputPassword4"
              placeholder="Enter Password"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="inputSalary" className="block text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="text"
              id="inputSalary"
              placeholder="Enter Salary"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="inputAddress" className="block text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="inputAddress"
              placeholder="1234 Main St"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              className="form-select w-full border border-gray-300 rounded-lg p-2"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="inputGroupFile01"
              className="block text-gray-700 mb-1"
            >
              Select Image
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              className="form-input w-full border border-gray-300 rounded-lg p-2"
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
