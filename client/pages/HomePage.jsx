import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";

import PostsList from "../components/Home/PostsList";
import NavBar from "../components/Home/NavBar";
import ChannelScroller from "../components/Home/ChannelScroller";
import PostForm from "../components/Home/PostForm";
import SidebarRight from "../components/Home/SidebarRight";

const HomePage = ({ setAuth }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getName = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:7000/home/", {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setName(data.user_name);
      setId(data.user_id);
      return data.user_id;
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPosts = useCallback(
    async (userId) => {
      if (!userId) return;

      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:7000/post/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        const formattedPosts = data.map((post) => ({
          id: post.id,
          author: post.username || name,
          avatar: `https://i.pravatar.cc/150?u=${post.user_id}`,
          content: post.content,
          image: post.image_url,
          time: new Date(post.created_at).toLocaleString(),
          likes: Math.floor(Math.random() * 200),
          comments: Math.floor(Math.random() * 40),
        }));

        setPosts(formattedPosts);
      } catch (err) {
        console.error("Error fetching posts:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [name]
  );

  useEffect(() => {
    const loadData = async () => {
      const userId = await getName();
      if (userId) {
        await fetchPosts(userId);
      }
    };
    loadData();
  }, [getName, fetchPosts]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.6s forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar setAuth={setAuth} />

        <main className="py-8">
          <ChannelScroller />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-4xl font-semibold text-emerald-800">
                  Home
                </h1>

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

              <PostForm fetchPosts={fetchPosts} id={id} />
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                </div>
              ) : error ? (
                <div className="text-center text-red-500 py-12">
                  Error: {error}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center text-gray-500 text-lg py-12">
                  No posts yet. Start by adding your first post!
                </div>
              ) : (
                <PostsList posts={posts} />
              )}
            </div>

            <SidebarRight />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
