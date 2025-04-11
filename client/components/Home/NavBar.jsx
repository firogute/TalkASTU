import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaBars,
  FaSignOutAlt,
  FaCog,
  FaMoon,
  FaBell,
} from "react-icons/fa";

const NavBar = ({ setAuth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const img = `https://i.pravatar.cc/150?img=3`;

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="py-4 flex justify-between items-center border-b border-emerald-100 relative">
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
          {img ? (
            <img
              src={img}
              alt="User  Avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
          ) : (
            <FaRegUserCircle />
          )}
        </button>

        <div className="relative" ref={menuRef}>
          <button
            className="text-2xl text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-emerald-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaCog className="mr-3 text-emerald-600" />
                Settings
              </Link>

              <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-emerald-50 cursor-pointer">
                <FaMoon className="mr-3 text-emerald-600" />
                Dark Mode
              </button>

              <Link
                to="/notifications"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-emerald-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBell className="mr-3 text-emerald-600" />
                Notifications
              </Link>

              <div className="border-t border-gray-200 my-1"></div>

              <button
                onClick={() => {
                  setAuth(false);
                }}
                className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
              >
                <FaSignOutAlt className="mr-3" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
