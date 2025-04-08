import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaRegBell, FaBars } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
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

        {/* Main Content */}
        <main className="py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Primary Content Area */}
            <div className="w-full lg:w-3/4">
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-4xl font-semibold text-emerald-800">
                  HomePage
                </h1>

                {/* Icon Navigation */}
                <div className="flex items-center gap-6 px-4 py-2 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    aria-label="Create new post"
                    className="group relative p-1 text-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    <CiSquarePlus />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Add Post
                    </span>
                  </button>

                  <button
                    aria-label="Search"
                    className="group relative p-1 text-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    <FaMagnifyingGlass />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Search
                    </span>
                  </button>

                  <button
                    aria-label="Messages"
                    className="group relative p-1 text-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    <TiMessages />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Messages
                    </span>
                  </button>

                  <button
                    aria-label="Notifications"
                    className="group relative p-1 text-xl text-gray-600 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    <FaRegBell />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Notifications
                    </span>
                  </button>
                </div>
              </div>

              {/* Content Placeholder */}
              <div className="p-6 rounded-xl bg-white border border-emerald-100 shadow-sm">
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  magni nobis similique corporis, deleniti asperiores
                  praesentium ducimus, saepe quidem illo perspiciatis blanditiis
                  dolores!
                </p>
              </div>
            </div>

            {/* Secondary Content Area (empty for now) */}
            <div className="w-full lg:w-1/4">
              {/* Sidebar content can go here later */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
