import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyDetails = () => {
  const { id } = useParams(); // Get company ID from URL
  const [company, setCompany] = useState(null); // State for company details
  const [jobProfiles, setJobProfiles] = useState([]); // State for job profiles
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null); // Optional error state

  // Fetch company details and job profiles by company ID
  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const companyResponse = await axios.get(`/admin/companyById/${id}`);
        console.log(companyResponse)
        setCompany(companyResponse.data);
        setLoading(false);

        // Fetch job profiles related to this company
        const jobProfilesResponse = await axios.get(`/admin/jobprofile/${id}`); // Replace with your job profiles endpoint
        setJobProfiles(jobProfilesResponse.data);
        // console.log(company.registration_type);
      } catch (error) {
        setError('Error fetching company and job profiles');
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [id]);
  
  
  // Handle job profile delete
  const handleDeleteJobProfile = async (jobId) => {
    try {
      await axios.delete(`/admin/deleteJobProfile/${jobId}`);
      setJobProfiles(jobProfiles.filter(profile => profile.job_id !== jobId)); // Remove the deleted profile from state
    } catch (error) {
      console.error('Error deleting job profile:', error);
    }
  };

  // If loading, display loading message
  if (loading) return <p>Loading...</p>;

  // If error, display error message
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {company && (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{company.comp_name}</h1>
          <p className="text-gray-700 mb-8">{company.location}</p>

          {/* Add Job Profile Button */}
          <Link
             to={{
              pathname: `/companies/${company.company_id}/add-job-profile`,
              state: { registration_type: company.registration_type }
            }}
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-6"
          >
            Add Job Profile
          </Link>

          {/* Display list of job profiles */}
          <h2 className="text-2xl font-bold mb-4">Job Profiles</h2>
          <div className="space-y-4">
            {jobProfiles.map((profile) => (
              <div key={profile.job_id} className="bg-gray-100 shadow-md rounded-lg p-4 flex items-center justify-between">
               <Link to={`/job/${profile.job_id}`}>
               <div>
                  <h3 className="text-lg font-semibold">{profile.profile_name}</h3>
                  <p className="text-gray-600">Deadline: {new Date(profile.deadline).toLocaleDateString()}</p>
                  <p className="text-gray-600">Salary: {profile.Salary}</p>
                  <p className="text-gray-600">{profile.job_details}</p>
                </div>
               </Link>
                <div className="space-x-4">
                  <Link
                    to={`/edit-job-profile/${profile.job_id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteJobProfile(profile.job_id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
