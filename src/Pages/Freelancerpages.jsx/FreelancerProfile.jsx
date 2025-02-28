import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { Navbar3 } from '../../Components/Common/CommonComponents/Navbar';
import img1 from "../../images/pexels-rfera-432059.jpg";

function FreelancerProfile() {
  const [selectedTab, setSelectedTab] = useState("Projects Done");
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isView,setView] =useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [profileData, setProfileData] = useState(() => {
    const storedProfile = localStorage.getItem("freelancerProfileData");
    return storedProfile ? JSON.parse(storedProfile) : {
      name: "Maymoona",
      role: "MERN Stack Developer",
      description: "I am a MERN stack developer with experience in building scalable web applications.",
      linkedin: "http://xyz.in",
      github: "http://xyz.in",
      phone: "+01 12345678",
      email: "maymoona123@gmail.com"
    };
  });

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("freelancerProfileItems");
    return storedItems ? JSON.parse(storedItems) : {
      "Achievements": [],
      "Projects Done": [],
      "Resume": []
    };
  });

  useEffect(() => {
    localStorage.setItem("freelancerProfileItems", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("freelancerProfileData", JSON.stringify(profileData));
  }, [profileData]);

  const handleEditClick = () => setIsEditing(true);
  const handleEditClose = () => setIsEditing(false);
  const handleView =(item)=> {
    setSelectedItem(item);
    setView(true)
  }
  const handleViews =()=>{ setView(false);
 setSelectedItem(null);
  }
  
  
  const handleEditSubmit = (data) => {
    setProfileData(data);
    setIsEditing(false);
  };

  const handleAddClick = () => setIsAdding(true);
  const handleClose = () => {
    setIsAdding(false);
    reset();
  };

  const onSubmit = (data) => {
    if (!data.image || data.image.length === 0) return;
    
    const imagesArray={};
    const file = data.image;

    const readImages=(index)=>{
      if(index>=files.lenght){
        setItems ( prev => {
          const updatedItems = {
            ...prev,
            [selectedTab]: [...(prev[selectedTab] || []), { image: imagesArray, smallDescription: data.description,detailedDescription:data.detailedDescription }]
          };
          localStorage.setItem("freelancerProfileItems", JSON.stringify(updatedItems));
          return updatedItems;
        });
            handleClose();
            return;
      }
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      
      imagesArray.push(reader.result);
      readImages(index+1)
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <Navbar3 />
      <div className="min-h-screen bg-[#0A1F3D] text-white pt-20 p-4 flex flex-col items-center">
      <div className="max-w-4xl w-full bg-[#23395B] mt-10 p-4 rounded-xl shadow-xl flex items-center border border-gray-600 relative">
  <img src={img1} alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-md mr-6" />
  
  <div className="flex-1">
    <h2 className="text-xl font-bold">{profileData.name}</h2>
    <p className="text-sm text-gray-300">{profileData.role}</p>
    <p className="text-xs text-gray-400 mt-2">{profileData.description}</p>
    
    <div className="mt-2 space-y-1">
      <p className="text-xs cursor-pointer"  onClick={() => window.location.href = `mailto:${profileData.email}`}>📧  {profileData.email}</p>
      <p className="text-xs">📞 {profileData.phone}</p>
      <p className="text-xs">🔗 <a href={profileData.linkedin} className="text-blue-400">LinkedIn</a></p>
      <p className="text-xs">🐱 <a href={profileData.github} className="text-blue-400">GitHub</a></p>
    </div>
  </div>

  <button onClick={handleEditClick} className="absolute top-4 right-4 text-sm bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-white flex items-center">
    <FontAwesomeIcon icon={faEdit} className="mr-1" /> Edit
  </button>
</div>


        <div className="flex space-x-4 mt-6">
          {Object.keys(items).map(tab => (
            <button 
              key={tab} 
              className={`px-4 py-2 rounded-lg text-xs ${selectedTab === tab ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-700`} 
              onClick={() => setSelectedTab(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-4xl w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {items[selectedTab]?.map((item, index) => (
    <div 
      key={index} 
      onClick={() => handleView(item)} 
      className="bg-white cursor-pointer text-black rounded-lg shadow-md p-4 flex flex-col items-center space-y-2 border border-gray-300"
    >
      <img src={item.image} alt="Uploaded" className="w-48 h-48 rounded-lg object-cover shadow-lg" />
      <p className="text-sm text-center font-semibold">{item.description}</p>
    </div>
  ))}
</div>


        <button onClick={handleAddClick} className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-xs text-white shadow-md">
          <FontAwesomeIcon icon={faPlus} /> Add {selectedTab}
        </button>

        {isAdding && (
          <div   className="fixed inset-0 flex items-center  justify-center bg-black bg-opacity-50">
            <div className="bg-white  text-black p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-bold mb-4">Add {selectedTab}</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" {...register("image")} className="mb-2" required />
                <input type="text" {...register("description")} placeholder="Description" className="mb-2 p-2 border border-gray-300 rounded w-full" required />
                <div className="flex space-x-4">
                  <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white">Save</button>
                  <button type="button" onClick={handleClose} className="bg-gray-500 px-4 py-2 rounded text-white">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
              
              {isView && selectedItem && (
  <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
    <div className="bg-white p-6 rounded-lg shadow-xl text-black w-96 flex flex-col items-center">
      <button className='self-end text-red-500' onClick={handleViews}>✖</button>
      <img src={selectedItem.image} alt="Uploaded" className="w-48 h-48 rounded-lg object-cover shadow-lg" />
      <p className="text-sm text-center font-semibold mt-2">{selectedItem.description}</p>
    </div>
  </div>
)}

        {isEditing && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-xl">
              <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
              <form onSubmit={handleSubmit(handleEditSubmit)}>
                <input type="text" {...register("name")} defaultValue={profileData.name} className="mb-2 p-2 border border-gray-300 rounded w-full" required />
                <input type="text" {...register("role")} defaultValue={profileData.role} className="mb-2 p-2 border border-gray-300 rounded w-full" required />
                <input type="email" {...register("email")} defaultValue={profileData.email} className="mb-2 p-2 border border-gray-300 rounded w-full cursor-pointer" required />
                 <input type="number" {...register("phone")} defaultValue={profileData.phone} className="mb-2 p-2 border border-gray-300 rounded w-full" required />
                <textarea {...register("description")} defaultValue={profileData.description} className="mb-2 p-2 border border-gray-300 rounded w-full" required />
                <div className="flex space-x-4">
                  <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">Save</button>
                  <button type="button" onClick={handleEditClose} className="bg-gray-500 px-4 py-2 rounded text-white">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
       
      </div>
    </div>
  );
}

export default FreelancerProfile;
