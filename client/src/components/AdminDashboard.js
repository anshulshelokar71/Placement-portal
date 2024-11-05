import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
        <Link to="/register-company">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-200">
            <h2 className="text-xl font-semibold">Register Company</h2>
          </div>
        </Link>
        <Link to="/companies">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-200">
            <h2 className="text-xl font-semibold">Show All Companies</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
