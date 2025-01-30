import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faStar } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Screenshot 2025-01-16 160134.png"
import img1 from "../../images/pexels-rfera-432059.jpg"
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-6 w-full max-w-3xl">
        
      {/* Job Image */}
      <img src={job.image} alt={job.title} className="w-36 h-48 object-cover rounded-md" />

      {/* Job Details */}
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <img src={job.userImage} alt={job.user} className="w-8 h-8 rounded-full obj" />
          <h3 className="font-semibold text-gray-800">{job.user}</h3>
        </div>
        <p className="text-gray-700 mt-2 text-sm">{job.description}</p>

        {/* Buttons */}
        <div className="flex items-center space-x-3 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md flex items-center space-x-2 hover:bg-blue-700">
            <FontAwesomeIcon icon={faMessage} /> <span>Message</span>
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md flex items-center space-x-2 hover:bg-blue-600">
            <FontAwesomeIcon icon={faPaperPlane} /> <span>Apply</span>
          </button>
          <FontAwesomeIcon icon={faStar} className="text-gray-500 hover:text-yellow-500 cursor-pointer ml-auto" />
        </div>
      </div>
    </div>
  );
};

const UserHome = () => {
  const jobs = [
    {
      id: 1,
      image: img,
      userImage: img1,
      user: "Usman",
      title: "Graphic Designer",
      description: "Looking for a creative designer to create social media posts and branding.",
    },
    {
      id: 2,
      image: img,
      userImage: img1,
      user: "Usman",
      title: "Graphic Designer",
      description: "Looking for a creative designer to create social media posts and branding.",
    },
    {
      id: 3,
      image: img,
      userImage: img1,
      user: "Usman",
      title: "Graphic Designer",
      description: "Looking for a creative designer to create social media posts and branding.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#19324A] flex flex-col items-center py-12">
        <Navbar3/>
      {/* Header */}
      {/* <header className="w-full max-w-5xl flex justify-between items-center text-white px-6 py-4">
        <h1 className="text-2xl font-semibold">WorkHive</h1>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-md text-gray-800 focus:outline-none"
        />
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faMessage} className="text-xl cursor-pointer" />
          <FontAwesomeIcon icon={faStar} className="text-xl cursor-pointer" />
        </div>
      </header> */}

      {/* Job Cards */}
      <div className="space-y-6 w-full mt-10 max-w-3xl">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default UserHome;
