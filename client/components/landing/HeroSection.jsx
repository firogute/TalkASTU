import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa6";

const samplePosts = [
  {
    id: 1,
    text: "Saw my crush in the library today... I panicked and hid behind a shelf 😭",
    rotate: "-rotate-10",
    bg: "bg-yellow-50",
  },
  {
    id: 2,
    text: "Why does the 8am class feel like a punishment? Let me sleeeeep 😩",
    rotate: "rotate-10",
    bg: "bg-pink-50",
  },
  {
    id: 3,
    text: "Someone brought a goat to campus... and it joined the lecture 😳",
    rotate: "-rotate-10",
    bg: "bg-blue-50",
  },
  {
    id: 4,
    text: "Confession: I ate 3 cafeteria lunches in one sitting and I regret nothing.",
    rotate: "rotate-20",
    bg: "bg-green-50",
  },
];
const HeroSection = () => (
  <section className="text-center py-10">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">
      Join the Wild Side of the <span className="text-emerald-600">ASTU</span>{" "}
      Community!
    </h1>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Psst...wanna spill the secret without getting caught? <br />
      TalkASTU is your anonymous playground for campus gossip, savage
      confessions, and those <em>'did that really happen?'</em> moments. <br />
      <br />
      Roast professors (nicely...or not), share cringe-worthy crush stories,{" "}
      <br />
      and find your people in this judgment-free zone!
    </p>

    <div className="flex items-center justify-center gap-2 py-2 hover:shadow-sm transition text-5xl font-bold text-gray-800 mb-6 ">
      <p className="self-center ">100% Anonymous</p>
      <FaUserSecret className="mt-0.5" />
    </div>

    <div className="space-x-4 flex flex-wrap justify-center gap-4">
      <Link
        to="/register"
        className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition text-lg font-medium shadow-lg hover:shadow-emerald-200"
      >
        <span>Join the Chaos</span> 🎉
      </Link>
      <Link
        to="/login"
        className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-50 transition text-lg font-medium"
      >
        <span>See Secrets</span>👀
      </Link>
    </div>
    <div className="relative w-full max-w-6xl mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {samplePosts.map((post) => (
          <div
            key={post.id}
            className={`${post.rotate} ${post.bg} border border-gray-200 shadow-md hover:shadow-xl transform transition-all duration-300 p-5 rounded-xl text-left text-gray-700 text-[15px] font-medium leading-relaxed`}
          >
            “{post.text}”
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
