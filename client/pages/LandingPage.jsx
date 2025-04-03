import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-4">
        <nav className="py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-emerald-600">TalkASTU</h1>
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

        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Connect with <span className="text-emerald-600">ASTU</span>{" "}
            Community
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            TalkASTU is the official platform for ASTU students and staff to
            share ideas, collaborate on projects, and stay updated on campus
            events.
          </p>
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
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition hover:-translate-y-1"
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
      <footer className="bg-emerald-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TalkASTU</h3>
              <p className="text-emerald-100">
                The official communication hub for ASTU community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-emerald-100">contact@talkastu.edu</p>
              <p className="text-emerald-100">+123 456 7890</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["Twitter", "Facebook", "Instagram"].map((social) => (
                  <a key={social} href="#" className="hover:text-emerald-200">
                    {social}
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
