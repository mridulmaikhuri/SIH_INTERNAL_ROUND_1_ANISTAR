import React from 'react';

function PatientDetailsForm({ patientDetails, handleChange }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Patient Health Details</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        value={patientDetails.age} 
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
                    <input 
                        type="number" 
                        name="height" 
                        value={patientDetails.height} 
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                    <input 
                        type="number" 
                        name="weight" 
                        value={patientDetails.weight} 
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Blood Pressure (mm Hg)</label>
                    <input 
                        type="text" 
                        name="bloodPressure" 
                        value={patientDetails.bloodPressure} 
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Medical Conditions</label>
                    <textarea 
                        name="medicalConditions" 
                        value={patientDetails.medicalConditions} 
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>
            </form>
        </div>
    );
}

export default PatientDetailsForm;
