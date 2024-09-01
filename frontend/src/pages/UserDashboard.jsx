import React, {useState, useEffect} from 'react';
import PatientInfoCard from './PatientInfoCard';
import PatientMetricsCard from './PatientMetricsCard';
import PatientHealthDetails from './PatientHealthDetails';
import { useParams } from 'react-router-dom';

function UserDashboard() {
    const { userId } = useParams();
    const [patientData, setPatientData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:4000/patient/${userId}`); // API call to fetch user data
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.msg || 'Failed to fetch user data');
                }

                const result = await response.json();
                setPatientData(result); // Store user data in state
            } catch (err) {
                setError(err.message); // Set error message
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchUserData();
    }, [userId]); // Dependency array includes id to refetch if it changes

    if (loading) return <div>Loading...</div>; // Loading state
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-full min-h-screen bg-gray-100 p-6 grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 col-span-1">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="text-xl font-semibold ml-4">{patientData.firstname + " " + patientData.lastname}</h2>
                </div>
                <PatientInfoCard patient={patientData} />
            </div>
            <div className="bg-white shadow rounded-lg p-6 col-span-2">
                <PatientMetricsCard patient={patientData} />
            </div>
            <div className="bg-white shadow rounded-lg p-6 col-span-3">
                <PatientHealthDetails patient={patientData} />
            </div>
        </div>
    );
}

export default UserDashboard;
