import React from "react";
import { FaRegUser, FaLock, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-emerald-50 to-rose-50 flex justify-center items-center p-4">
      <div className="shadow-xl max-w-md w-full rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Register</h1>
          <p className="text-lg text-gray-600">
            Create an account to{" "}
            <span className="text-emerald-600 font-medium">join</span> the
            community.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="uname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaRegUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="uname"
                  name="uname"
                  placeholder="Enter your username"
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                  minLength="8"
                  required
                />
                <div className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer">
                  <FaXmark className="text-gray-900" />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  minLength="8"
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                  required
                />
                <div className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer">
                  <FaEye className="text-gray-900" />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                  required
                />
                <div className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer">
                  <FaEye className="text-gray-900" />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-emerald-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
