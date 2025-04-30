import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AddingPost() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: 'onSubmit', // Validate on submit
      reValidateMode: 'onChange', // Re-validate on change
    });
  
    const [skills, setSkills] = React.useState([]);
    const [skillInput, setSkillInput] = React.useState('');
    const [images, setImages] = React.useState([]);
    const [successMessage, setSuccessMessage] = React.useState('');
    
    const [requirements, setRequirements] = useState([]);
    const [requirementInput, setRequirementInput] = useState('');
    const navigate = useNavigate();
  
    const handleSkillAdd = () => {
      const trimmed = skillInput.trim();
      if (!trimmed) return;
      if (!skills.includes(trimmed)) {
        setSkills([...skills, trimmed]);
      }
      setSkillInput('');
    };

    
  
    const removeSkill = (skill) => {
      setSkills(skills.filter((s) => s !== skill));
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImages([...images, file]);
      }
      e.target.value = '';
    };
  
    const removeImage = (index) => {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
    };

        // Handle adding requirement
        const handleRequirementAdd = () => {
            const trimmed = requirementInput.trim();
            if (!trimmed) return;
            if (!requirements.includes(trimmed)) {
              setRequirements([...requirements, trimmed]);
            }
            setRequirementInput('');
          };
      
          const removeRequirement = (requirement) => {
            setRequirements(requirements.filter((r) => r !== requirement));
          };
  
    const handleCloseAdd = () => {
      navigate('/clientprofile');
    };
  
    const onSubmit = async (data) => {
      if (skills.length === 0) {
        alert('Please add at least one skill before submitting.');
        return;
      }
  
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('category', data.category);
      formData.append('description', data.description);
      formData.append('description1', data.description1 || '');
      formData.append('price', data.price);
      formData.append('pay', data.pay);
      formData.append('hourlyRate', data.hourlyRate);
      formData.append('duration', data.duration || '');
      formData.append('requirements', JSON.stringify(requirements));
      formData.append('qualifications', data.qualifications || '');
      formData.append('paymentStructure', data.paymentStructure || '');
      formData.append('bonus', data.bonus || '');
      formData.append('paymentMethod', data.paymentMethod || '');
      formData.append('paymentFrequency', data.paymentFrequency || '');
      formData.append('paymentStructure', data.paymentStructure || '');
      formData.append('skillsNeeded', JSON.stringify(skills));
      images.forEach((img) => formData.append('images', img));
  
      try {
        const response = await axios.post('https://workhive-project-backend-6.onrender.com/api/post/add-post', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        setSuccessMessage('Post created successfully!');
        navigate('/clientprofile'); // Redirect after success
      } catch (err) {
        alert(`Error uploading post: ${err.response?.data?.error || err.message}`);
      }
    };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl overflow-y-auto max-h-screen">
        {successMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full animate-fade-in">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">Success!</h2>
              <p className="text-gray-800 mb-4">{successMessage}</p>
              <button
                onClick={() => {
                  setSuccessMessage('');
                  navigate('/clientprofile');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add New Post</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
            id='title'
            onChange={(e) => setTitle(e.target.value)}
  {...register('title', { required: 'Title is required' })}
  className="w-full p-2 border border-gray-300 rounded-md"
  placeholder="Enter title"
/>
{errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
            id='category'
            onChange={(e) => setCategory(e.target.value)}
              {...register('category', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter category"
            />
            {errors.category && <p className="text-red-500 text-sm mt-1">Category is required</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
                id='description'
                onChange={(e) => setDescription(e.target.value)}
              {...register('description', { required: true })}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter description"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Additional Description</label>
            <textarea
                id='description1'
                onChange={(e) => setDescription1(e.target.value)}
              {...register('description1')}
              rows="3"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter additional description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
                id='price'
                onChange={(e) => setPrice(e.target.value)}
              {...register('price', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pay</label>
            <input
                type="text"
                id='pay'
                onChange={(e) => setPay(e.target.value)}
              {...register('pay', { required: true })}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter pay"
            />
            {errors.pay && <p className="text-red-500 text-sm mt-1">Pay is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Hourly Rate</label>
            <input
              type="number"
                id='hourlyRate'
              {...register('hourlyRate')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter hourly rate"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input
                type="text"
                id='duration'
                onChange={(e) => setDuration(e.target.value)}
              {...register('duration')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter duration"
            />
          </div>

         {/* Requirements */}
         <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Requirements</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={requirementInput}
                  onChange={(e) => setRequirementInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleRequirementAdd();
                    }
                  }}
                  className="flex-grow p-2 border border-gray-300 rounded-md"
                  placeholder="Type requirement and press Enter"
                />
                <button
                  type="button"
                  onClick={handleRequirementAdd}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {requirements.map((requirement, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    {requirement}
                    <button
                      type="button"
                      onClick={() => removeRequirement(requirement)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </span>
                ))}
              </div>
            </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Skills Needed</label>
            <div className="flex gap-2">
              <input
                type="text"
                id='skillInput'
                
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSkillAdd();
                  }
                }}
                className="flex-grow p-2 border border-gray-300 rounded-md"
                placeholder="Type skill and press Enter"
              />
              <button
                type="button"
                onClick={handleSkillAdd}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Add Image</label>
            <input
              type="file"
              id='images'

              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {images.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-4">
                {images.map((img, i) => (
                  <div key={i} className="relative w-24 h-24">
                    <img
                      src={URL.createObjectURL(img)}
                      alt="preview"
                      className="w-full h-full object-cover rounded-md border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute -top-2 -right-2 bg-white border rounded-full p-1 text-red-500 hover:text-red-700 shadow"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qualifications</label>
            <input
              {...register('qualifications')}
                type="text"
                    id='qualifications'
                    onChange={(e) => setQualifications(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter qualifications"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bonus</label>
            <input
                type="text"
                id='bonus'
                onChange={(e) => setBonus(e.target.value)}
              {...register('bonus')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter bonus"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Payment Method</label>
            <input
                type="text"
                id='paymentMethod'
                onChange={(e) => setPaymentMethod(e.target.value)}
              {...register('paymentMethod')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter payment method"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Payment Frequency</label>
            <input
                type="text"
                id='paymentFrequency'
                onChange={(e) => setPaymentFrequency(e.target.value)}
              {...register('paymentFrequency')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter payment frequency"
            />
          </div> <div>
            <label className="block text-sm font-medium mb-1">Payment Structure</label>
            <input
                type="text"
                id='paymentStructure'
                onChange={(e) => setPaymentStructure(e.target.value)}
              {...register('paymentStructure')}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter payment Structure"
            />
          </div>

          <div className="md:col-span-2 mt-6 flex justify-between items-center">
            <button
              type="button"
              onClick={handleCloseAdd}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingPost;