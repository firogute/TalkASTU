import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="py-6 flex justify-between items-center border-b border-emerald-100">
      <Link
        to="/"
        className="text-3xl font-bold text-emerald-600 hover:opacity-90 transition-opacity"
      >
        <img
          src="/logo2.png"
          alt="TalkASTU Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      <div className="flex items-center space-x-6">
        <button className="text-2xl text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
          <FaRegUserCircle />
        </button>
        <button className="text-2xl text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
