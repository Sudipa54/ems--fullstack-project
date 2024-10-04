import React from "react";

function Profile() {
  return (
    // Use flex, justify-center, and items-center to center the profile card on the page
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl bg-white dark:bg-gray-50 dark:text-gray-800">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500"
        />
        <div className="space-y-4 text-center divide-y divide-gray-200 dark:divide-gray-300">
          <div className="pt-3 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Sudipa Shrestha
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-500 dark:text-gray-600">
              Full-stack developer
            </p>
          </div>
          <div className="flex justify-center pt-2 space-x-4">
            {/* Social links and other icons can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
