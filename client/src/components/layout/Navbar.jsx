import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-none py-2">
      <nav className="flex justify-center">
        <Link
          to="/"
          className="font-mono text-black flex items-center text-xl"
        >
          <i className="material-icons mr-2">code</i>
          MERN
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;