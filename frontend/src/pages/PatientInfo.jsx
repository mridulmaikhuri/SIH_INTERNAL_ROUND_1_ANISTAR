import React from 'react';

function PatientInfoCard({ patient, handleInputChange }) {
    return (
        <div>
            <img src="/user.png" alt="Patient" className="w-22 h-auto mb-3 mx-auto rounded-full border-2 border-gray-300" />
            <h2 className="text-3xl font-semibold mb-4 text-center">Patient Information</h2>
            
            <div className="text-xl ml-5 mt-5 space-y-4">
                <div>
                    <label className="block font-medium">ID:</label>
                    <input
                        type="text"
                        name="PID"
                        value={patient.PID}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block font-medium">Name:</label>
                    <input
                        type="text"
                        name="Pname"
                        value={patient.Pname}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block font-medium">Gender:</label>
                    <select
                        name="Gender"
                        value={patient.Gender}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Age:</label>
                    <input
                        type="number"
                        name="Age"
                        value={patient.Age}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default PatientInfoCard;
