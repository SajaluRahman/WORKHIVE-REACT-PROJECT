import { useLocation } from "react-router-dom";
import "../../App.css";

function Info() {
  const location = useLocation();
  const { job } = location.state;  // Get job info from state

  if (!job) {
    return <div>No job data available</div>;  // Handle case where no data is passed
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-6 flex">
        {/* Left Side - Payment Details */}
        

        {/* Right Side - Job Details & Images */}
        <div className="w-1/2 max-h-[80vh] overflow-scroll no-scrollbar p-6">
          <h1 className="text-2xl font-bold text-gray-800">Explore Freelance {job.title}</h1>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">{job.title}</h3>
          <ul className="mt-2 text-gray-600 space-y-2">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>

            ))}

          </ul>
          <p className="mt-2 text-gray-700 space-y-2" >{job.description1}</p>
          <div className="mt-4 flex space-x-4">
            {job.images.map((image, index) => (
              <img key={index} src={image} alt="Work example" className="w-1/2 rounded-lg" />
            ))}
          </div>
          <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Apply Now
          </button>
        </div>
        <div className="w-1/2 max-h-fit p-6 bg-green-50 rounded-lg">
  <div>
    <h3 className="text-lg font-semibold text-green-700">Payment Details</h3>
    <p className="text-xl font-bold text-gray-800">{job.pay}</p>
    <p className="text-gray-700">{job.hourlyRate} (Hourly Rate)</p>
    <p className="text-gray-600">{job.duration}</p>
    
    {/* Additional Payment Details */}
    <p className="text-gray-700">Payment Structure: {job.paymentStructure}</p>
    <p className="text-gray-700">Bonus/Incentives: {job.bonus}</p>
    <p className="text-gray-700">Payment Method: {job.paymentMethod}</p>
    <p className="text-gray-700">Payment Frequency: {job.paymentFrequency}</p>
  </div>


          <button className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Info;
