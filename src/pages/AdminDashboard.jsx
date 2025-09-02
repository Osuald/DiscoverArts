import React, { useState } from "react";
import { FaEye, FaHeart, FaComment, FaPlus } from "react-icons/fa";

const AdminDashboard = () => {
  // Example blogs (you could fetch from DB later)
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Modern Art Trends", views: 120, likes: 15, comments: 5 },
    { id: 2, title: "Sculpture in 2025", views: 80, likes: 10, comments: 2 },
  ]);

  const [newBlog, setNewBlog] = useState("");

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.trim() === "") return;
    const blog = {
      id: blogs.length + 1,
      title: newBlog,
      views: 0,
      likes: 0,
      comments: 0,
    };
    setBlogs([...blogs, blog]);
    setNewBlog("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-800 mb-6">
        Admin Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaEye className="text-purple-600 text-2xl" />
          <div>
            <p className="text-gray-600">Total Views</p>
            <h2 className="text-xl font-semibold">
              {blogs.reduce((acc, b) => acc + b.views, 0)}
            </h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaHeart className="text-red-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Likes</p>
            <h2 className="text-xl font-semibold">
              {blogs.reduce((acc, b) => acc + b.likes, 0)}
            </h2>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <FaComment className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Comments</p>
            <h2 className="text-xl font-semibold">
              {blogs.reduce((acc, b) => acc + b.comments, 0)}
            </h2>
          </div>
        </div>
      </div>

      {/* Blog Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-lg font-semibold mb-4">Add New Blog</h2>
        <form onSubmit={handleAddBlog} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter blog title"
            value={newBlog}
            onChange={(e) => setNewBlog(e.target.value)}
            className="flex-1 border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
          />
          <h2 className="text-sm font-semibold mb-2">Author</h2>
          <select name="" id="">
                <option value="">Select Author</option>
                <option value="">Author 1</option>
                <option value="">Author 2</option>
                <option value="">Author 3</option>
          </select>
            
          <div className="border rounded-md p-2">
            <h2 className="text-sm font-semibold mb-2">Upload Image</h2>
            <input type="file" className="" />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
          >
            <FaPlus /> Add
          </button>
        </form>
      </div>

      {/* Blog List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Your Blogs</h2>
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li
              key={blog.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <p className="font-medium">{blog.title}</p>
              <div className="flex gap-6 text-gray-600">
                <span className="flex items-center gap-1">
                  <FaEye /> {blog.views}
                </span>
                <span className="flex items-center gap-1">
                  <FaHeart /> {blog.likes}
                </span>
                <span className="flex items-center gap-1">
                  <FaComment /> {blog.comments}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
