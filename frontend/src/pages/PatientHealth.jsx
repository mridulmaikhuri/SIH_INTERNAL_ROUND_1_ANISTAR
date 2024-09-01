import React from 'react';

function PatientHealthDetails({ patient, handleInputChange }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Health Details</h2>
            <div className="space-y-6">
                <div className="flex flex-col">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Symptoms:</label>
                    <textarea
                        name="Symptoms"
                        value={patient.Symptoms}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border bg-pink-50 border-pink-300 focus:border-pink-500 focus:ring-pink-500 shadow-sm p-2"
                        rows="3"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="block text-lg font-medium text-gray-700 mb-2">Remarks:</label>
                    <textarea
                        name="Remarks"
                        value={patient.Remarks}
                        onChange={handleInputChange}
                        className="block w-full rounded-lg border bg-teal-50 border-teal-300 focus:border-teal-500 focus:ring-teal-500 shadow-sm p-2"
                        rows="3"
                    />
                </div>
            </div>
        </div>
    );
}

export default PatientHealthDetails;
