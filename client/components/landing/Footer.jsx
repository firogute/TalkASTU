import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white p-12 md:p-0 md:py-12 leading-5 pt-[100px] pb-[30px] text-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="relative">
            <img src="/black-logo.png" alt="footer logo" className="h-10" />
            <p className="text-emerald-100 mt-3">
              The official communication hub for ASTU community.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 w-fit relative">
              Quick Links
              <div className="w-full h-1.5 bg-[#767676] rounded-[3px] absolute top-[25px] left-0 overflow-hidden my-1.5">
                <span
                  className="w-[15px] h-full bg-white rounded-[3px] absolute top-0 left-[10px] animate-moving-line"
                  style={{
                    animation: "moving 2s linear infinite",
                  }}
                ></span>
              </div>
            </h4>

            <ul className="space-y-2 mt-6">
              <li>
                <Link to="/" className="hover:text-emerald-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-emerald-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-emerald-200">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 w-fit relative">
              Contact
              <div className="w-full h-1.5 bg-[#767676] rounded-[3px] absolute top-[25px] left-0 overflow-hidden my-1.5">
                <span
                  className="w-[15px] h-full bg-white rounded-[3px] absolute top-0 left-[10px] animate-moving-line"
                  style={{
                    animation: "moving 2s linear infinite",
                  }}
                ></span>
              </div>
            </h4>
            <div className="flex items-center gap-2 py-2 hover:shadow-sm transition mb-2">
              <FaEnvelope className="mt-0.5" />
              <p className="self-center ">
                ghost@talkastu.edu (we never check this)
              </p>
            </div>
            <p className="text-emerald-100 flex items-center gap-2 py-2 hover:shadow-sm transition mb-2">
              <FaPhoneAlt className="mt-0.5" />
              +251 900-PLS-DON`T (seriously, we won't answer)
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 relative w-fit">
              Follow Us{" "}
              <div className="w-full h-1.5 bg-[#767676] rounded-[3px] absolute top-[25px] left-0 overflow-hidden">
                <span
                  className="w-[15px] h-full bg-white rounded-[3px] absolute top-0 left-[10px] animate-moving-line"
                  style={{
                    animation: "moving 2s linear infinite",
                  }}
                ></span>
              </div>
            </h4>
            <div className="flex space-x-4 mt-6">
              {[
                {
                  icon: (
                    <FaFacebookF className="flex items-center justify-center w-5 h-5" />
                  ),
                  site: "Facebook",
                },
                {
                  icon: (
                    <FaXTwitter className="flex items-center justify-center w-5 h-5" />
                  ),
                  site: "X",
                },
                {
                  icon: (
                    <FaInstagram className="flex items-center justify-center w-5 h-5" />
                  ),
                  site: "Instagram",
                },
              ].map(({ icon, site }) => (
                <a
                  key={site}
                  href="#"
                  aria-label={site}
                  className="flex items-center justify-center p-3 rounded-full bg-white text-emerald-400 hover:text-emerald-700 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-500 mt-8 pt-8 text-center text-emerald-100">
          <p>© {new Date().getFullYear()} TalkASTU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
