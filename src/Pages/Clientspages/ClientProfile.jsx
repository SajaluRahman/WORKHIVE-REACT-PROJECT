import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";
import { Sidebar2 } from "../../Components/FreelancerComponents/Sidebar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ClientProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("Posts");
  const [isEditing, setIsEditing] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "Maymoona",
    role: "ABCD Company",
    description: "I am an ABCD company manager hiring freelancers...",
    linkedin: "http://xyz.in",
    phone: "+01 12345678",
    email: "maymoona123@gmail.com",
  });
  

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formData,
  });

  useEffect(() => {
    if (isEditing) {
      reset(formData);
    }
  }, [isEditing, formData, reset]);

  const handleEditClick = () => setIsEditing(true);
  const toAddPost = () => Navigate("/addingpost");

  const onSubmit = (data) => {
    setFormData(data);
    setIsEditing(false);
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4004/api/post/all-posts");
      if (res.data && res.data.posts) {
        setPosts(res.data.posts);
      }
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Delete post handler
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:4004/api/post/delete-post/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
      setActiveDropdown(null);
    } catch (err) {
      console.error("Failed to delete post", err);
    }
  };

  const toMoreInfo = (postId) => {
    Navigate(`/post-info/${postId}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      <Navbar3 />

      {/* Toggle Sidebar */}
      <div className="fixed bottom-8 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-white border-r border-gray-300`}>
        <Sidebar2 />
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="pt-20 p-6 flex flex-col items-center w-full">
        {/* Profile Section */}
        <div className="w-full max-w-6xl bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center justify-between border border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center space-x-0 sm:space-x-6 text-center sm:text-left">
            <img
              src={img1}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-gray-200 shadow-md mx-auto sm:mx-0"
            />
            <div className="mt-4 sm:mt-0">
              <h2 className="text-xl font-bold text-gray-800">{formData.name}</h2>
              <p className="text-sm text-gray-600">{formData.role}</p>
              <p className="text-sm text-gray-700 max-w-md mt-2">{formData.description}</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-3">
                <a href={formData.linkedin} className="text-blue-600 hover:underline text-sm">LinkedIn</a>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {formData.phone} | {formData.email}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
            <button
              onClick={toAddPost}
              className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm transition shadow"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-6xl mt-6 flex justify-center sm:justify-around bg-white p-3 rounded-xl shadow border border-gray-300">
          {["Posts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-sm font-semibold transition ${selectedTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="flex-1 p- md:px-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  max-h-[80vh] no-scrollbar overflow-scroll">
        {posts.length > 0 ? (
    posts.map((post) => (
      <div key={post._id} className="bg-white cursor-pointer hover:scale-105 transition-all hover:shadow-xl ease-in-out shadow-md rounded-lg overflow-hidden p-3">
        <img
          src={post.images && post.images.length ? `http://localhost:4004/uploads/${post.images[0]}` : "/fallback.jpg"}
          alt="Post"
          className="w-full h-80 sm:h-48 object-cover  rounded-md"
        />

        <div className="p-3 flex flex-col flex-grow justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src={post.authorImage || img1}
                className="w-8 h-8 rounded-full border border-gray-300"
                alt="Author"
              />
              <h3 className="text-sm font-semibold text-gray-900">{formData.name}</h3>
            </div>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm">{post.description}</p>

            <div className="flex items-center justify-between mt-2 relative">
              <span className="text-gray-800 font-semibold text-sm">${post.price}</span>

              {/* 3-dots Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setActiveDropdown(post._id)}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  &#8942;
                </button>

                {activeDropdown === post._id && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 bottom-5 w-32 bg-white rounded-lg shadow-lg z-20 border"
                  >
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* More Info Button */}
          <button
            onClick={() => toMoreInfo(post._id)}
            className="mt-4 w-full px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
          >
            More Info
          </button>
        </div>
      </div>
    ))
  ) : (
    <div>No posts available</div>
  )}
</div>

      </div>
    </div>
  );
}

export default ClientProfile;
