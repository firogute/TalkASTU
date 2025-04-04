import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";

const HeroSection = () => (
  <section className="text-center py-20">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">
      Join the Wild Side of the <span className="text-emerald-600">ASTU</span>{" "}
      Community!
    </h1>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Psst...wanna spill the tea without getting caught? TalkASTU is your
      anonymous playground...
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
);

export default HeroSection;
