import React, { useState } from "react";
import { FaHeart, FaRegComment, FaShare, FaEllipsisH } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import ImageModal from "../ImageModal";

const Posts = ({ posts }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [postText, setPostText] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setPostImage(null);
  };

  const handlePost = () => {
    if (postText.trim() === "" && !postImage) return;
    console.log("Post:", { text: postText, image: postImage });
    setPostText("");
    setPostImage(null);
  };

  return (
    <div className="w-full">
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      <div className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm">
        <div className="flex items-start gap-3">
          <img
            src="https://i.pravatar.cc/150?img=4"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />
          <form className="flex items-start gap-3 w-full">
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
                  className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium"
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-5">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-5 rounded-xl bg-white border border-emerald-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{post.author}</h3>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisH />
              </button>
            </div>

            {/* Text */}
            <p className="mb-4 text-gray-800">{post.content}</p>

            {/* Image */}
            {post.image && (
              <div
                className="mb-4 rounded-lg overflow-hidden border border-gray-100 cursor-pointer"
                onClick={() => setSelectedImage(post.image)}
              >
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full h-auto max-h-[32rem] object-contain"
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between text-gray-500 border-t pt-3">
              <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <FaHeart />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <FaRegComment />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
