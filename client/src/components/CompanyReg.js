import React, { useState } from 'react';
import axios from 'axios';

const CompanyRegistration = () => {
    const [formData, setFormData] = useState({
        comp_name: '',
        location: '',
        contact_person: '',
        email: '',
        registration_type: '' // New field for internship or placement
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
            await axios.post('/admin/company', formData);  // Send data to /api/company
            alert('Company registered successfully!');
        } catch (error) {
            alert('Error registering company.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold mb-6">Register a New Company</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="comp_name"
                            value={formData.comp_name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Contact Person</label>
                        <input
                            type="text"
                            name="contact_person"
                            value={formData.contact_person}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Registration Type</label>
                        <select
                            name="registration_type"
                            value={formData.registration_type}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                        >
                            <option value="">Select Type</option>
                            <option value="Internship">Internship</option>
                            <option value="Placement">Placement</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Register Company
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CompanyRegistration;
