import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { FaXTwitter, FaUserSecret } from "react-icons/fa6";
import NavBar from "../components/landing/NavBar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4">
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

        {/* Animated Telegram Channels */}
        <section className=" py-12 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 flex flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
              Top <span className="text-emerald-600">ASTU</span> Telegram
              Channels
            </h2>
            <p className="text-center text-gray-600 mb-3 max-w-2xl mx-auto">
              Join the conversation in these student-run channels
            </p>

            {/* Animated Channel Ticker */}
            <div className="relative h-32 overflow-hidden bg-white my-4">
              {" "}
              {/* First Row (Left to Right) */}
              <div className="absolute top-2 left-0 flex items-center space-x-8 whitespace-nowrap animate-marquee">
                {" "}
                {[
                  "#ASTU-POST",
                  "#ASTU-ENTERTAINMENT",
                  "#ASTU-GENERAL",
                  "#ASTU-ONE",
                  "#ASTU-FRESH",
                ].map((channel, i) => (
                  <a
                    key={`first-${i}`}
                    href={`https://t.me/${channel.replace("#", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full font-medium hover:bg-emerald-200 transition-all"
                  >
                    <FaTelegram className="mr-2" /> {channel}
                  </a>
                ))}
                {/* Duplicate for seamless looping */}
                {[
                  "#ASTU-POST",
                  "#ASTU-ENTERTAINMENT",
                  "#ASTU-GENERAL",
                  "#ASTU-ONE",
                  "#ASTU-FRESH",
                ].map((channel, i) => (
                  <a
                    key={`first-dup-${i}`}
                    href={`https://t.me/${channel.replace("#", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full font-medium hover:bg-emerald-200 transition-all"
                  >
                    <FaTelegram className="mr-2" /> {channel}
                  </a>
                ))}
              </div>
              {/* Second Row (Right to Left) */}
              <div className="absolute bottom-2 left-0 flex items-center space-x-8 whitespace-nowrap animate-marquee-reverse">
                {" "}
                {[
                  "#ASTU-NEWS",
                  "#ASTU-MEMES",
                  "#ASTU-CHAT",
                  "#ASTU-HELP",
                  "#ASTU-LOVE",
                ].map((channel, i) => (
                  <a
                    key={`second-${i}`}
                    href={`https://t.me/${channel.replace("#", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-rose-100 text-rose-800 rounded-full font-medium hover:bg-rose-200 transition-all"
                  >
                    <FaTelegram className="mr-2" /> {channel}
                  </a>
                ))}
                {/* Duplicate for seamless looping */}
                {[
                  "#ASTU-NEWS",
                  "#ASTU-MEMES",
                  "#ASTU-CHAT",
                  "#ASTU-HELP",
                  "#ASTU-LOVE",
                ].map((channel, i) => (
                  <a
                    key={`second-dup-${i}`}
                    href={`https://t.me/${channel.replace("#", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-rose-100 text-rose-800 rounded-full font-medium hover:bg-rose-200 transition-all"
                  >
                    <FaTelegram className="mr-2" /> {channel}
                  </a>
                ))}
              </div>
            </div>
            <button
              className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium shadow-md w-fit mx-auto my-6"
              onClick={() => {}}
            >
              + Add Your Channel
            </button>
          </div>
        </section>
        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Join the Wild Side of the{" "}
            <span className="text-emerald-600">ASTU</span> Community!
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Psst...wanna spill the tea without getting caught? TalkASTU is your
            anonymous playground for campus gossip, savage confessions, and
            those 'did that really happen?' moments. Roast professors
            (nicely...or not), share cringe-worthy crush stories, and find your
            people in this judgment-free zone!
          </p>

          <div className="flex items-center justify-center gap-2 py-2 hover:shadow-sm transition text-5xl font-bold text-gray-800 mb-6 ">
            <p className="self-center ">All Anonymously</p>
            <FaUserSecret className="mt-0.5" />
          </div>
          <div className="space-x-4">
            <Link
              to="/register"
              className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-lg font-medium shadow-lg hover:shadow-emerald-200"
            >
              Join Now
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition text-lg font-medium"
            >
              See Features
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why TalkASTU?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campus Network",
                desc: "Connect with students and faculty across all departments.",
                icon: "👥",
              },
              {
                title: "Instant Updates",
                desc: "Get real-time notifications on events and deadlines.",
                icon: "🔔",
              },
              {
                title: "Study Groups",
                desc: "Form virtual study groups for collaborative learning.",
                icon: "📚",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1 cursor-pointer mx-auto"
              >
                <span className="text-4xl mb-4 inline-block">
                  {feature.icon}
                </span>
                <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      {/* rounded-tl-[120px] */}
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
    </div>
  );
};

export default LandingPage;
