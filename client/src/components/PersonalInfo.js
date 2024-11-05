import React, { useState } from 'react';
import axios from 'axios';

const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState({
        Name: '',
        Address: '',
        Personal_email: '',
        College_email: '',
        DOB: '',
        Age: '',
        Gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/complete-profile', personalInfo);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error completing profile', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <input
                    name="Name"
                    value={personalInfo.Name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    name="Address"
                    value={personalInfo.Address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <input
                    name="Personal_email"
                    value={personalInfo.Personal_email}
                    onChange={handleChange}
                    placeholder="Personal Email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <input
                    name="College_email"
                    value={personalInfo.College_email}
                    onChange={handleChange}
                    placeholder="College Email"
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <input
                    type="date"
                    name="DOB"
                    value={personalInfo.DOB}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <input
                    name="Age"
                    type="number"
                    value={personalInfo.Age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                />
                <select
                    name="Gender"
                    value={personalInfo.Gender}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition duration-300"
                >
                    Go to next section
                </button>
            </form>
        </div>
    );
};

export default PersonalInfo;
