import React from 'react';
import PatientInfoCard from './PatientInfoCard';
import PatientMetricsCard from './PatientMetricsCard';
import PatientHealthDetails from './PatientHealthDetails';

const patientData = {
    PID: 1,
    Pname: 'John Doe',
    Gender: 'Male',
    Age: 45,
    Height: 1.6,
    Weight: 75,
    BMI: 33.6,
    Pregnancies: 0,
    BloodPressure: '120/80',
    Insulin: 0,
    Glucose: 148,
    FastingBloodSugar: 0,
    maxHeartRate: 162,
    Cholestrol: 244,
    Symptoms: 'Fever, nausea',
    Remarks: 'History of heart disease, sedentary lifestyle',
    image: 'user.png'
};

function UserDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 col-span-1">
                <div className="flex items-center mb-6">
                    <h2 className="text-xl font-semibold ml-4">{patientData.Pname}</h2>
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
