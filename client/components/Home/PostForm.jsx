import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { supabase } from "../../src/supabaseClient";

const PostForm = ({ fetchPosts, id }) => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [rawImageFile, setRawImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));
      setRawImageFile(file);
    }
  };

  const handleRemoveImage = () => {
    setPostImage(null);
    setRawImageFile(null);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    if (postText.trim() === "" && !rawImageFile) return;

    let imageUrl = null;

    if (rawImageFile) {
      const fileName = `${Date.now()}_${rawImageFile.name}`;
      const { error } = await supabase.storage
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
      setPostText("");
      setPostImage(null);
      setRawImageFile(null);
      await fetchPosts(id); // reload posts
    } else {
      console.error("Post failed:", result.message);
    }
  };

  return (
    <div className="flex items-start gap-3">
      <img
        src="https://i.pravatar.cc/150?img=4"
        alt="User"
        className="h-10 w-10 rounded-full object-cover"
      />
      <form className="flex flex-col w-full" onSubmit={handlePost}>
        <textarea
          placeholder="What's on your mind?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
          rows="3"
        />
        {postImage && (
          <div className="relative mt-2">
            <img
              src={postImage}
              alt="Preview"
              className="rounded-lg max-h-60 object-cover w-full"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
              <FiX className="text-red-500" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between mt-3">
          <label className="text-sm text-emerald-600 cursor-pointer hover:underline">
            Attach Image
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
          <button
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
