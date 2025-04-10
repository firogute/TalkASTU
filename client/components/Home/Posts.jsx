import React, { useState } from "react";
import { FaHeart, FaRegComment, FaShare, FaEllipsisH } from "react-icons/fa";
import ImageModal from "../ImageModal";

const Posts = ({ posts }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full">
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

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
