import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={() => navigate("/dashboard/category/add-category")}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        Add Category
      </button>
    </div>
  );
}

export default Category;
