import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const AddJobProfile = () => {
  const location = useLocation();
  const registration_type = location.state||{};
  console.log(registration_type);
  
    const {id} = useParams();
  const [formData, setFormData] = useState({
    profile_name: '',
    deadline: '',
    job_details: '',
    company_id: id,
    Salary: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/admin/jobprofile', formData);
      console.log('Job profile added:', response.data);
    } catch (error) {
      console.error('Error adding job profile:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Job Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="profile_name" className="block text-sm font-medium text-gray-700">
              Profile Name
            </label>
            <input
              type="text"
              name="profile_name"
              value={formData.profile_name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter profile name"
            />
          </div>

          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="job_details" className="block text-sm font-medium text-gray-700">
              Job Details
            </label>
            <textarea
              name="job_details"
              value={formData.job_details}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter job details"
            />
          </div>
          {registration_type==='Placement'?<div>
            <label htmlFor="Salary(LPA)" className="block text-sm font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              name="Salary"
              value={formData.Salary}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter salary amount"
            />
          </div>:<div> <label htmlFor="Salary" className="block text-sm font-medium text-gray-700">
              Stipend
            </label>
            <input
              type="number"
              name="Salary"
              value={formData.Salary}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter stipend amount"
            /></div>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add Job Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobProfile;
