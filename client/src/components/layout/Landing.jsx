import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center p-6">
        <h4 className="text-3xl md:text-4xl font-bold mb-4">
          <b>Build</b> a login/auth app with the{" "}
          <span className="font-mono bg-gray-200 px-2 py-1 rounded">MERN</span> stack from scratch
        </h4>
        <p className="text-lg text-gray-600 mb-8">
          Create a (minimal) full-stack app with user authentication via passport and JWTs
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/register"
            className="w-36 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md tracking-wider"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="w-36 text-center bg-white hover:bg-gray-200 text-black font-bold py-3 px-4 rounded-md tracking-wider border border-gray-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;