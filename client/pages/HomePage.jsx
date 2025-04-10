import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FiX } from "react-icons/fi";
import { supabase } from "../src/supabaseClient";

import Posts from "../components/Home/Posts";
import NavBar from "../components/Home/NavBar";

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

  const sampleChannels = [
    { id: 1, name: "Computer Science", members: 342 },
    { id: 2, name: "Engineering Club", members: 215 },
    { id: 3, name: "Sports Society", members: 178 },
    { id: 4, name: "Debate Team", members: 94 },
    { id: 5, name: "Music & Arts", members: 127 },
  ];

  const [postText, setPostText] = useState("");
  const [rawImageFile, setRawImageFile] = useState(null);
  const [postImage, setPostImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));
      setRawImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    setPostImage(null);
  };

  const handlePost = async (e) => {
    e.preventDefault();

    if (postText.trim() === "" && !rawImageFile) return;

    let imageUrl = null;

    // uploading to Supabase
    if (rawImageFile) {
      const fileName = `${Date.now()}_${rawImageFile.name}`;
      const { data, error } = await supabase.storage
        .from("talkastu")
        .upload(`posts/${fileName}`, rawImageFile);

      if (error) {
        console.error("Image upload failed:", error.message);
        return;
      }

      const { data: publicData } = supabase.storage
        .from("talkastu")
        .getPublicUrl(`posts/${fileName}`);

      imageUrl = publicData.publicUrl;
    }
    // Post to backend
    const response = await fetch("http://localhost:7000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        content: postText,
        image_url: imageUrl,
      }),
    });
    const result = await response.json();

    if (response.ok) {
      // console.log("Post created:", result);
      setPostText("");
      setPostImage(null);
      setRawImageFile(null);
      await fetchPosts(id);
    } else {
      console.error("Post failed:", result.message);
    }
  };
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
          <div className="w-full flex justify-center">
            <div className="channels flex gap-5 p-4 bg-gradient-to-br from-emerald-100 to-rose-100 rounded-full overflow-x-auto max-w-full scrollbar-hide scroll-smooth px-6 mb-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="relative group animate-fade-in-up cursor-pointer"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Avatar with multiple animations */}
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 3}`}
                    alt={`channel-${i}`}
                    className="rounded-full size-16 shrink-0 object-cover 
                  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  group-hover:scale-110 group-hover:-translate-y-2
                  group-hover:ring-4 group-hover:ring-emerald-200/30
                  group-hover:shadow-lg group-hover:shadow-emerald-100/40
                  hover:rotate-[5deg]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-4xl font-semibold text-emerald-800">
                  Dashboard
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
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=4"
                  alt="User"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <form
                  className="flex items-start gap-3 w-full"
                  onSubmit={handlePost}
                >
                  <div className="flex-1 w-full">
                    <textarea
                      placeholder="What's on your mind?"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
                      rows="3"
                    />
                    {postImage && (
                      <div className="relative mt-3 max-w-xs border rounded-lg overflow-hidden">
                        <img
                          src={postImage}
                          alt="Preview"
                          className="w-full object-contain max-h-60"
                        />
                        <button
                          onClick={handleRemoveImage}
                          className="absolute top-1 right-1 p-1 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80"
                          aria-label="Remove image"
                        >
                          <FiX size={16} />
                        </button>
                      </div>
                    )}
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor="image-upload"
                          className="p-1.5 text-emerald-600 hover:text-emerald-700 rounded-full hover:bg-emerald-50 transition-colors cursor-pointer"
                          title="Upload Image"
                        >
                          <CiSquarePlus className="text-xl" />
                          <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                      <button
                        onClick={handlePost}
                        type="submit"
                        className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium cursor-pointer"
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
                <Posts posts={posts} />
              )}
            </div>

            <div className="w-full lg:w-1/4">
              <div className="sticky top-4 space-y-6">
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
