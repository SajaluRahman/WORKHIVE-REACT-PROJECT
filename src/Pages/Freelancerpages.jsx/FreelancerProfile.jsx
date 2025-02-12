import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Navbar3 } from '../../Components/Common/CommonComponents/Navbar';
import { useForm } from 'react-hook-form';
import { Sidebar } from '../../Components/FreelancerComponents/Sidebar';

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // React Hook Form for the Edit Profile Modal
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: formData,
  });

  // Reset the form values when the modal opens
  useEffect(() => {
    if (isEditing) {
      reset(formData);
    }
  }, [isEditing, formData, reset]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  const onSubmit = (data) => {
    setFormData(data);
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar3 />
   <button
         onClick={() => setSidebarOpen(!sidebarOpen) }
         className="md:hidden text-xl fixed top-8 left-0 z-50 text-white p-2 px-4 bg-[#3ca7c2] rounded-ee-xl rounded-tr-xl   shadow-md"
       >
       {sidebarOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
       </button>
      
      {/* Sidebar (Hidden on small screens, toggled on click) */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#0a0f1f] md:block`}>  
        <Sidebar />
      </div>
      <div className="min-h-screen bg-[#0A1F3D] text-white pt-20 p-4  sm:p-6 flex flex-col items-center">
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
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-xs text-white transition shadow-md">
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs text-white transition shadow-md"
            >
              EDIT PROFILE
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl w-full mt-6 flex flex-wrap justify-center sm:justify-around bg-[#2D3E5F] p-3 rounded-xl shadow-md">
          {['Achievements', 'Projects Done', 'Resume'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setSelectedTab(tab)} 
              className={`px-4 py-2 text-xs font-semibold transition border-b-2 ${selectedTab === tab ? 'border-blue-400 text-blue-400' : 'border-transparent text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <div className="max-w-4xl w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="h-44 bg-gray-600 rounded-lg shadow-md" />
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-sm text-black shadow-xl">
            <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              <input
                name="name"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              
              <input
                name="role"
                placeholder="Role"
                {...register("role", { required: "Role is required" })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}

              <textarea
                name="description"
                placeholder="Description"
                {...register("description", { required: "Description is required" })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}

              <input
                name="linkedin"
                placeholder="LinkedIn"
                {...register("linkedin", { 
                  required: "LinkedIn URL is required", 
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Enter a valid URL"
                  }
                })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.linkedin && <p className="text-red-500 text-xs">{errors.linkedin.message}</p>}

              <input
                name="github"
                placeholder="GitHub"
                {...register("github", { 
                  required: "GitHub URL is required", 
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Enter a valid URL"
                  }
                })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.github && <p className="text-red-500 text-xs">{errors.github.message}</p>}

              <input
                name="phone"
                placeholder="Phone"
                {...register("phone", { 
                  required: "Phone number is required", 
                  pattern: {
                    value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                    message: "Enter a valid phone number"
                  }
                })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}

              <input
                name="email"
                placeholder="Email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Enter a valid email address"
                  }
                })}
                className="w-full p-2 border rounded-md text-sm"
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

              <div className="flex justify-end space-x-2">
                <button type="button" onClick={handleClose} className="px-3 py-2 bg-gray-400 hover:bg-gray-500 rounded-md text-xs">
                  Cancel
                </button>
                <button type="submit" className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-xs text-white">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreelancerProfile;
