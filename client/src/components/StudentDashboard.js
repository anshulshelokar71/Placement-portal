import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    const [jobProfiles, setJobProfiles] = useState([]);

    useEffect(() => {
        const fetchJobProfiles = async () => {
            try {
                const response = await axios.get('/api/job-profiles');
                setJobProfiles(response.data);
            } catch (error) {
                console.error('Error fetching job profiles', error);
            }
        };

        fetchJobProfiles();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-4xl font-bold mb-6">Eligible Job Profiles</h2>
            <ul className="bg-white p-6 rounded-lg shadow-lg">
                {jobProfiles.map((job) => (
                    <li key={job.id} className="mb-4 text-lg">
                        {job.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;
