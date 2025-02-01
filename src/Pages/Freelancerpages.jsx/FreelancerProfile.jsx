import React, { useState } from 'react';
import { Menu } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Navbar3 } from '../../Components/Common/CommonComponents/Navbar';

function FreelancerProfile() {
    const [selectedTab, setSelectedTab] = useState("Projects Done");
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: "Maymoona",
        role: "MERN Stack Developer",
        description: "I am a MERN stack developer with...",
        linkedin: "http://xyz.in",
        github: "http://xyz.in",
        phone: "+01 12345678",
        email: "maymoona123@gmail.com"
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };
  
    return (
    <div>
      <Navbar3/>
      <div className="min-h-screen bg-[#0A1F3D] text-white pt-20 p-6 flex flex-col items-center">
        {/* Profile Header */}
        <div className="max-w-4xl w-full bg-[#23395B] p-6 rounded-xl shadow-xl flex flex-row items-center justify-between border border-gray-600">
          <div className="flex items-center space-x-6">
            <img src={img1} alt="Profile" className="w-28 h-28 rounded-full border-4 border-white shadow-md" />
            <div>
              <h2 className="text-xl font-bold">{formData.name}</h2>
              <p className="text-sm text-gray-300">{formData.role}</p>
              <p className="text-xs text-gray-400 max-w-md mt-2">{formData.description}</p>
              <div className="flex space-x-4 mt-3">
                <a href={formData.linkedin} className="text-blue-400 text-sm">LinkedIn</a>
                <a href={formData.github} className="text-blue-400 text-sm">GitHub</a>
              </div>
              <p className="text-xs text-gray-400 mt-2">{formData.phone} | {formData.email}</p>
            </div>
          </div>
          <div className="flex space-x-4">
              <button className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-xs text-white transition shadow-md">
                <FontAwesomeIcon icon={faPlus} />
              </button>
              <button onClick={handleEditClick} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs text-white transition shadow-md">EDIT PROFILE</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-4xl mt-6 flex justify-around bg-[#2D3E5F] p-3 rounded-xl shadow-md">
          {['Achievements', 'Projects Done', 'Resume'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setSelectedTab(tab)} 
              className={`px-4 py-2 text-xs font-semibold transition ${selectedTab === tab ? 'border-b-2 border-blue-400 text-blue-400' : 'text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <div className="w-full max-w-4xl mt-6 grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="h-44 bg-gray-600 rounded-lg shadow-md" />
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-80 text-black shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Name" />
              <input name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Role" />
              <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Description"></textarea>
              <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="LinkedIn" />
              <input name="github" value={formData.github} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="GitHub" />
              <input name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Phone" />
              <input name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Email" />
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