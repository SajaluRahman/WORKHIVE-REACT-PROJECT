import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Navbar3 } from '../../Components/Common/CommonComponents/Navbar';
import { Sidebar } from '../../Components/FreelancerComponents/Sidebar';
import img1 from "../../images/pexels-rfera-432059.jpg";

function FreelancerProfile() {
  const [selectedTab, setSelectedTab] = useState("Projects Done");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [items, setItems] = useState({
    "Achievements": [],
    "Projects Done": [],
    "Resume": []
  });
  
  const [formData] = useState({
    name: "Maymoona",
    role: "MERN Stack Developer",
    description: "I am a MERN stack developer with...",
    linkedin: "http://xyz.in",
    github: "http://xyz.in",
    phone: "+01 12345678",
    email: "maymoona123@gmail.com"
  });
  
  const { register, handleSubmit, reset } = useForm();

  const handleAddClick = () => setIsAdding(true);
  const handleClose = () => {
    setIsAdding(false);
    reset();
  };

  const onSubmit = (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setItems(prev => ({
        ...prev,
        [selectedTab]: [...prev[selectedTab], { image: reader.result, description: data.description }]
      }));
      handleClose();
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar3 />
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden text-xl fixed top-8 left-0 z-50 text-white p-2 px-4 bg-[#3ca7c2] rounded-ee-xl rounded-tr-xl shadow-md">
        {sidebarOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#0a0f1f] md:block`}>
        <Sidebar />
      </div>
      <div className="min-h-screen bg-[#0A1F3D] text-white pt-20 p-4 flex flex-col items-center">
        {/* Profile Header */}
        <div className="max-w-4xl w-full bg-[#23395B] mt-10 p-4 sm:p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between border border-gray-600">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <img
              src={img1}
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold">{formData.name}</h2>
              <p className="text-sm text-gray-300">{formData.role}</p>
              <p className="text-xs text-gray-400 mt-2">{formData.description}</p>
              <div className="flex justify-center sm:justify-start space-x-4 mt-3">
                <a href={formData.linkedin} className="text-blue-400 text-sm">LinkedIn</a>
                <a href={formData.github} className="text-blue-400 text-sm">GitHub</a>
              </div>
              <p className="text-xs text-gray-400 mt-2">{formData.phone} | {formData.email}</p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl w-full mt-6 flex flex-wrap justify-center bg-[#2D3E5F] p-3 rounded-xl shadow-md">
          {["Achievements", "Projects Done", "Resume"].map(tab => (
            <button key={tab} onClick={() => setSelectedTab(tab)} className={`px-4 py-2 text-xs font-semibold border-b-2 ${selectedTab === tab ? "border-blue-400 text-blue-400" : "border-transparent text-white"}`}>{tab}</button>
          ))}
        </div>
        <button onClick={handleAddClick} className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-xs text-white shadow-md">
          <FontAwesomeIcon icon={faPlus} /> Add {selectedTab}
        </button>
        <div className="max-w-4xl w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {items[selectedTab].map((item, index) => (
            <div key={index} className="h-40 bg-gray-600 rounded-lg shadow-md flex flex-col items-center justify-center p-2 text-center">
              <img src={item.image} alt="Uploaded" className="h-20 w-20 rounded-md" />
              <p className="text-xs mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {isAdding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 rounded-lg w-full max-w-sm text-black shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Add {selectedTab}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <input type="file" {...register("image", { required: true })} className="w-full p-2 border rounded-md text-sm" />
              <input {...register("description", { required: true })} placeholder="Enter description" className="w-full p-2 border rounded-md text-sm" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={handleClose} className="px-3 py-2 bg-gray-400 hover:bg-gray-500 rounded-md text-xs">Cancel</button>
                <button type="submit" className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-xs text-white">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreelancerProfile;
