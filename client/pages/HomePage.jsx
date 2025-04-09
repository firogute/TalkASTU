import React from "react";
import { Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaRegBell,
  FaBars,
  FaHeart,
  FaRegComment,
  FaShare,
} from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

import Posts from "../components/Home/Posts";

const HomePage = () => {
  // Sample data - replace with real data from your database later
  const samplePosts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      content:
        "Just finished my final project for CS101! Here's a screenshot of the UI I designed.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
      time: "2 hours ago",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Sarah Smith",
      avatar: "https://i.pravatar.cc/150?img=2",
      content:
        "There's a great workshop on machine learning this Friday. Who's interested?",
      time: "5 hours ago",
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      author: "CS Department",
      avatar: "https://i.pravatar.cc/150?img=3",
      content:
        "Our annual hackathon results are in! Check out the winning projects in these photos.",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&auto=format",
      time: "1 day ago",
      likes: 87,
      comments: 23,
    },
    {
      id: 4,
      author: "Physics Department",
      avatar: "https://i.pravatar.cc/150?img=30",
      content:
        "The annual science fair will be held next Wednesday in the main auditorium. All projects must be submitted by Monday!",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format",
      time: "3 hours ago",
      likes: 56,
      comments: 12,
    },
    {
      id: 5,
      author: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=12",
      content:
        "Just aced my calculus midterm! Here's my study notes if anyone needs them for the make-up exam.",
      image:
        "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=800&auto=format",
      time: "1 day ago",
      likes: 89,
      comments: 24,
    },
    {
      id: 6,
      author: "Student Union",
      avatar: "https://i.pravatar.cc/150?img=45",
      content:
        "Spring festival lineup is here! Who's excited for the concert next Friday?",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format",
      time: "5 hours ago",
      likes: 210,
      comments: 47,
    },
    {
      id: 7,
      author: "Coding Club",
      avatar: "https://i.pravatar.cc/150?img=28",
      content:
        "24-hour hackathon starts tomorrow! Last chance to register your team.",
      image:
        "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&auto=format",
      time: "2 days ago",
      likes: 132,
      comments: 31,
    },
    {
      id: 8,
      author: "Maria Garcia",
      avatar: "https://i.pravatar.cc/150?img=8",
      content: "Beautiful sunset at the campus lake today! 🌅",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format",
      time: "Just now",
      likes: 42,
      comments: 5,
    },
    {
      id: 9,
      author: "Cafeteria",
      avatar: "https://i.pravatar.cc/150?img=50",
      content: "New menu items this week - try our vegan options!",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format",
      time: "4 hours ago",
      likes: 78,
      comments: 15,
    },
  ];

  const sampleChannels = [
    { id: 1, name: "Computer Science", members: 342 },
    { id: 2, name: "Engineering Club", members: 215 },
    { id: 3, name: "Sports Society", members: 178 },
    { id: 4, name: "Debate Team", members: 94 },
    { id: 5, name: "Music & Arts", members: 127 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Posts posts={samplePosts} />

            {/* Right Side - Channels/Clubs */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-4 space-y-6">
                {/* Channels Section */}
                <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                    Popular Channels
                  </h2>
                  <div className="space-y-3">
                    {sampleChannels.map((channel) => (
                      <Link
                        key={channel.id}
                        to={`/channel/${channel.id}`}
                        className="block p-2 rounded-lg hover:bg-emerald-50 transition-colors"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">#{channel.name}</span>
                          <span className="text-xs text-gray-500">
                            {channel.members} members
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <button className="w-full mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    View all channels →
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4 text-emerald-800">
                    University Clubs
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-600 font-bold">CS</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Computer Science Club</h3>
                        <p className="text-xs text-gray-500">
                          Weekly meetings on Fridays
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center">
                        <span className="text-rose-600 font-bold">SP</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Sports Club</h3>
                        <p className="text-xs text-gray-500">
                          Tryouts next week
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-600 font-bold">DT</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Debate Team</h3>
                        <p className="text-xs text-gray-500">
                          Regional competition coming up
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    Explore all clubs →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
