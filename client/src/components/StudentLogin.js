import React, { useState } from 'react';
import axios from 'axios';

const StudentLogin = () => {
    const [MIS_ID, setMIS_ID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/student/login', { MIS_ID, password });
            if (response.data.profileComplete) {
                window.location.href = '/dashboard';
            } else {
                window.location.href = '/complete-profile';
            }
        } catch (err) {
            setError('Invalid MIS ID or password');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Student Login</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <input
                    type="text"
                    placeholder="MIS ID"
                    value={MIS_ID}
                    onChange={(e) => setMIS_ID(e.target.value)}
                    className="w-full p-3 mb-4 border border-gray-300 rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-6 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default StudentLogin;
