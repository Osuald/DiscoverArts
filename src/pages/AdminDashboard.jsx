import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEye,
  FaHeart,
  FaComment,
  FaPlus,
  FaList,
  FaChartBar,
  FaUser,
  FaCog,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("blogs");
  const [newBlog, setNewBlog] = useState("");
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Modern Art Trends",
      views: 120,
      likes: 15,
      comments: 5,
      category: "Trends",
      type: "article",
      createdAt: new Date("2025-08-28"),
    },
    {
      id: 2,
      title: "Sculpture in 2025",
      views: 80,
      likes: 10,
      comments: 2,
      category: "Sculpture",
      type: "article",
      createdAt: new Date("2025-08-27"),
    },
  ]);
  const navigate = useNavigate();

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.trim() === "") return;
    const blog = {
      id: blogs.length + 1,
      title: newBlog,
      views: 0,
      likes: 0,
      comments: 0,
      category: "Uncategorized",
      type: "article",
      createdAt: new Date(),
    };
    setBlogs([...blogs, blog]);
    setNewBlog("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSort = (e) => {
    const sortBy = e.target.value;
    setBlogs(
      [...blogs].sort((a, b) => {
        if (sortBy === "name") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "time") {
          return b.createdAt - a.createdAt;
        } else if (sortBy === "type") {
          return a.type.localeCompare(b.type);
        } else {
          return a.category.localeCompare(b.category);
        }
      })
    );
  };

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSelectBlog = (id) => {
    if (!id) {
      setSelectedBlog(null);
    } else {
      const blog = blogs.find((b) => b.id === parseInt(id));
      setSelectedBlog(blog || null);
    }
  };

  const filteredBlogs = () => {
    if (selectedBlog) {
      return [selectedBlog];
    } else if (startDate && endDate) {
      return blogs.filter(
        (b) =>
          b.createdAt.getTime() >= new Date(startDate).getTime() &&
          b.createdAt.getTime() <= new Date(endDate).getTime()
      );
    } else {
      return blogs;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-white to-purple-300 flex">
      {/* Sidebar */}
      <div className="w-64 bg-transparent p-6 rounded-xl border-r border-gray-300 shadow-xl">
        <h1 className="text-3xl font-bold  mb-6">Admin Dashboard</h1>
        <ul className="space-y-2">
          <li
            className={`flex items-center gap-4 p-2 rounded-lg ${
              activeTab === "blogs"
                ? "bg-purple-700 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("blogs")}
          >
            <FaList /> Blogs
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-lg ${
              activeTab === "stats"
                ? "bg-purple-700 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("stats")}
          >
            <FaChartBar /> Stats
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-lg ${
              activeTab === "authors"
                ? "bg-purple-700 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("authors")}
          >
            <FaUser /> Authors
          </li>
          <li
            className={`flex items-center gap-2 p-2 rounded-lg ${
              activeTab === "settings"
                ? "bg-purple-700 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <FaCog /> Settings
          </li>
        </ul>
        <button
          className="mt-20 bg-gradient-to-r from-purple-700 to-pink-500  px-4 py-2 rounded-md hover:bg-purple-800"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="bg-transparent flex-1 p-6">
        {activeTab === "blogs" && (
          <div>
            {/* Blog Upload Form */}
            <div className="bg-transparent p-6 rounded-xl shadow mb-10">
              <h2 className="text-lg font-semibold mb-4">Add New Blog</h2>
              <form onSubmit={handleAddBlog} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Enter blog title"
                  value={newBlog}
                  onChange={(e) => setNewBlog(e.target.value)}
                  className="flex-1 border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800"
                >
                  <FaPlus /> Add
                </button>
              </form>
            </div>

            {/* Blog List */}
            <div className="bg-transparent p-6 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-4">Your Blogs</h2>
              <div className="flex justify-end mb-4">
                <select
                  className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
                  onChange={handleSort}
                >
                  <option value="name">Sort by Name</option>
                  <option value="time">Sort by Time</option>
                  <option value="type">Sort by Type</option>
                  <option value="category">Sort by Category</option>
                </select>
              </div>
              <ul className="space-y-4">
                {filteredBlogs().map((blog) => (
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
        )}

        {activeTab === "stats" && (
          <div>
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                <FaEye className="text-purple-600 text-2xl" />
                <div>
                  <p className="text-gray-600">Total Views</p>
                  <h2 className="text-xl font-semibold">
                    {filteredBlogs().reduce((acc, b) => acc + b.views, 0)}
                  </h2>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                <FaHeart className="text-red-500 text-2xl" />
                <div>
                  <p className="text-gray-600">Total Likes</p>
                  <h2 className="text-xl font-semibold">
                    {filteredBlogs().reduce((acc, b) => acc + b.likes, 0)}
                  </h2>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                <FaComment className="text-blue-500 text-2xl" />
                <div>
                  <p className="text-gray-600">Total Comments</p>
                  <h2 className="text-xl font-semibold">
                    {filteredBlogs().reduce((acc, b) => acc + b.comments, 0)}
                  </h2>
                </div>
              </div>
            </div>

            {/* Stats Filter */}
            <div className="bg-white p-6 rounded-xl shadow mb-10">
              <h2 className="text-lg font-semibold mb-4">Stats Filter</h2>
              <div className="flex gap-4">
                <select
                  className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
                  value={selectedBlog ? selectedBlog.id : ""}
                  onChange={(e) => handleSelectBlog(e.target.value)}
                >
                  <option value="">All Blogs</option>
                  {blogs.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.title}
                    </option>
                  ))}
                </select>

                <input
                  type="date"
                  className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="date"
                  className="border px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-purple-400"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "authors" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Authors</h2>
            <p className="text-gray-600">
              This section will manage blog authors.
            </p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Settings</h2>
            <p className="text-gray-600">
              Adjust your dashboard preferences here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
