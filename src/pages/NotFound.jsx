import React from "react";
// import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 dark:text-white">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          className="mt-6 px-6 py-2 text-white bg-black hover:bg-gray-800 transition cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
