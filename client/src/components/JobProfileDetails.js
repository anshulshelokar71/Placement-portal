import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobProfileDetails = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [jobProfile, setJobProfile] = useState(null);

    useEffect(() => {
        // Fetch job profile details
        const fetchJobProfile = async () => {
            try {
                const response = await axios.get(`/admin/job-profile/${jobId}`);
                setJobProfile(response.data);
            } catch (error) {
                console.error('Error fetching job profile:', error);
            }
        };
        fetchJobProfile();
    }, [jobId]);

    const handleNavigate = (path) => {
        navigate(path); // Navigate to the appropriate form page
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {jobProfile && (
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">{jobProfile.profile_name}</h1>
                    <p className="text-gray-700 mb-4">Details: {jobProfile.job_details}</p>

                    {/* Buttons to navigate to add eligibility and hiring process forms */}
                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            onClick={() => handleNavigate(`/job/${jobId}/add-eligibility`)}
                        >
                            Add Eligibility Criteria
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            onClick={() => handleNavigate(`/job/${jobId}/add-hiring-process`)}
                        >
                            Add Hiring Process
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobProfileDetails;
