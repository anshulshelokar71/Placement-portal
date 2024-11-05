import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const CompanyList = () => {
    const [companies, setCompanies] = useState(null);
  const [loading, setLoading] = useState(true); // Optional loading state
  const [error, setError] = useState(null); // Optional error state

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('/admin/company'); // API call
        console.log(response.data);
        
        setCompanies(response.data); // Assuming the data is in response.data
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        setError('Error fetching companies'); // Handle any errors
        setLoading(false); // Set loading to false on error
      }
    };

    fetchCompanies(); // Call the function to fetch companies
  }, []); // Empty dependency array means this runs once after component mounts

  if (loading) return <p>Loading companies...</p>; // Optional loading state display
  if (error) return <p>{error}</p>; // Optional error state display

    return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Registered Companies</h1>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <ul className="space-y-4">
          {companies.map((company) => (
           <li key={company.company_id} className="border-b last:border-none pb-4 flex justify-between items-center">
           <div className="flex flex-col">
             <Link
               to={`/companies/${company.company_id}`}
               className="text-blue-500 hover:underline text-lg font-medium"
             >
               {company.comp_name}
             </Link>
           </div>
           <div className="text-gray-500">
             {company.registration_type}
           </div>
         </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyList;
