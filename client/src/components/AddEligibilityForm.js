import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddEligibilityForm = () => {
    const { jobId } = useParams();
    const [formData, setFormData] = useState({
        Min_10th: '',
        Min_12th: '',
        Min_CGPA: '',
        branch_id: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`/admin/job/${jobId}/add-eligibility`, formData);
            alert('Eligibility Criteria added successfully!');
        } catch (error) {
            console.error('Error adding eligibility:', error);
            alert('Failed to add eligibility criteria.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Eligibility Criteria</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Minimum 10th %</label>
                <input
                    type="number"
                    name="Min_10th"
                    value={formData.Min_10th}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Minimum 12th %</label>
                <input
                    type="number"
                    name="Min_12th"
                    value={formData.Min_12th}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Minimum CGPA</label>
                <input
                    type="number"
                    step="0.01"
                    name="Min_CGPA"
                    value={formData.Min_CGPA}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Branch ID</label>
                <input
                    type="number"
                    name="branch_id"
                    value={formData.branch_id}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Add Eligibility
            </button>
        </form>
    );
};

export default AddEligibilityForm;
