import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaLock, FaEye } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GrView, GrFormViewHide } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

const API_URL = "";

const Register = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isView, setIsView] = useState(false);
  const [isConfirmView, setIsConfirmView] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password !== document.getElementById("confirmPassword").value) {
      return toast.error("Passwords do not match!");
    }

    try {
      setIsRegistering(true);
      const response = await fetch(`http://localhost:7000/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        toast.success("Registered successfully! 🎉");
      } else {
        toast.error(data.message || "Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-screen h-screen bg-gradient-to-br from-emerald-50 to-rose-50 flex justify-center items-center p-4">
        <div className="shadow-xl max-w-md w-full rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm p-8 flex flex-col">
          <Link to="/">
            <img src="/logo.svg" alt="logo" className="w-8 ml-auto" />
          </Link>
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Register</h1>
            <p className="text-lg text-gray-600">
              Create an account to{" "}
              <span className="text-emerald-600 font-medium">join</span> the
              community.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="uname"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRegUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="uname"
                    name="username"
                    value={inputs.username}
                    placeholder="Enter your username"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                    minLength="6"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer"
                    onClick={() =>
                      setInputs((prev) => ({ ...prev, username: "" }))
                    }
                  >
                    <FaXmark className="text-gray-900" />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={isView ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    minLength="6"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                    required
                    onChange={(e) => onChange(e)}
                  />
                  <div
                    className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer"
                    onClick={() => setIsView(!isView)}
                  >
                    {isView ? (
                      <GrView className="text-gray-900" />
                    ) : (
                      <GrFormViewHide className="text-gray-900" />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={isConfirmView ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    minLength="6"
                    className="block w-full pl-10 pr-3 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-0 mr-3 h-fit my-auto p-2 flex items-center hover:bg-gray-300 rounded-full cursor-pointer"
                    onClick={() => setIsConfirmView(!isConfirmView)}
                  >
                    {isConfirmView ? (
                      <GrView className="text-gray-900" />
                    ) : (
                      <GrFormViewHide className="text-gray-900" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-emerald-600 text-white text-lg font-medium py-3 rounded-xl hover:bg-emerald-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex justify-center items-center cursor-pointer"
            >
              {isRegistering ? (
                <ThreeDots
                  height="28"
                  width="80"
                  color="#fff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                "Register"
              )}
            </button>
          </form>
          <div className="self-center my-5 text-[17px]">
            <p>
              Already Have an account?
              <Link to="/login" className="text-emerald-800 underline p-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
