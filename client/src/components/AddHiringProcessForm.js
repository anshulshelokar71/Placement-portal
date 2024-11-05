import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddHiringProcessForm = () => {
    const { jobId } = useParams();
    const [formData, setFormData] = useState({
        roundNo: '',
        roundName: '',
        roundDetail: ''
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
            await axios.post(`/admin/job/${jobId}/add-hiring-process`, formData);
            alert('Hiring Process added successfully!');
        } catch (error) {
            console.error('Error adding hiring process:', error);
            alert('Failed to add hiring process.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Hiring Process</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Round Number</label>
                <input
                    type="number"
                    name="roundNo"
                    value={formData.roundNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Round Name</label>
                <input
                    type="text"
                    name="roundName"
                    value={formData.roundName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Round Details</label>
                <textarea
                    name="roundDetail"
                    value={formData.roundDetail}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg"
                />
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Add Hiring Process
            </button>
        </form>
    );
};

export default AddHiringProcessForm;
