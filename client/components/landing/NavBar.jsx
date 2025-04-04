import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="py-6 flex justify-between items-center">
      <div className="text-3xl font-bold text-emerald-600">
        <a href="/">
          <img src="/logo2.png" alt="logo" className="h-12 w-auto" />
        </a>
      </div>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-5 py-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition font-medium"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
