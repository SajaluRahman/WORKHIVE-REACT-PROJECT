import { useLocation } from "react-router-dom";
import "../../App.css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Info() {
  const location = useLocation();
  const { job } = location.state; // Get job info from state

  if (!job) {
    return <div className="text-center text-red-500 font-semibold">No job data available</div>; // Handle case where no data is passed
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-200 md:p-6 flex justify-center items-center">
      <div className="md:max-w-5xl w-full bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col md:flex-row">
        {/* Left Side - Job Details & Images */}
        <div className="w-full md:w-1/2 max-h-[80vh] overflow-scroll no-scrollbar md:p-6">
          <h1 className="text-2xl font-bold text-white">Explore Freelance {job.title}</h1>

          {/* Job Rating */}
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-gray-300 ml-1 font-semibold">{job.rating}/5</span>
          </div>

          <h3 className="text-lg font-semibold text-white mt-4">{job.title}</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            {job.requirements.map((requirement, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>

          <p className="mt-2 text-gray-400 space-y-2">{job.description1}</p>

          {/* Skills Section */}
          <h3 className="text-md font-semibold text-white mt-4">Required Skills:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {job.skillsNeeded.map((skill, index) => (
              <span key={index} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>

          {/* Qualifications Section */}
          <h3 className="text-md font-semibold text-white mt-4">Qualifications:</h3>
          <p className="text-gray-400">{job.qualifications}</p>

          {/* Image Carousel */}
          <div className="mt-4">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full"
            >
              {job.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt="Work example"
                    className="h-64 w-full rounded-lg object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button className="mt-6 w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
            Apply Now
          </button>
        </div>

        {/* Right Side - Payment Details */}
        <div className="w-full md:w-1/2 max-h-fit p-6 bg-gray-700 rounded-lg shadow-md mt-6 md:mt-0">
          <div className="flex items-center space-x-4 mb-4">
            <img src={job.userImage} alt="User" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-lg font-semibold text-green-400">{job.user}</h3>
              <p className="text-sm text-gray-400">Job Poster</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-green-400">Payment Details</h3>
          <p className="text-xl font-bold text-gray-300">{job.pay}</p>
          <p className="text-gray-400">{job.hourlyRate} (Hourly Rate)</p>
          <p className="text-gray-500">{job.duration}</p>

          {/* Additional Payment Details */}
          <p className="text-gray-400"><strong>Payment Structure:</strong> {job.paymentStructure}</p>
          <p className="text-gray-400"><strong>Bonus/Incentives:</strong> {job.bonus}</p>
          <p className="text-gray-400"><strong>Payment Method:</strong> {job.paymentMethod}</p>
          <p className="text-gray-400"><strong>Payment Frequency:</strong> {job.paymentFrequency}</p>

          <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Continue <span className="ml-5"> →</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
