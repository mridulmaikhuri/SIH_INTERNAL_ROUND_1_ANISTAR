import React from 'react';

function PatientMetricsCard({ patient, handleInputChange }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Physical & Medical Metrics</h2>
            <div className="space-y-3">
                {[
                    { label: "Height", name: "Height", type: "number", value: patient.Height, suffix: "m", color: "bg-blue-50 border-blue-300 focus:border-blue-500 focus:ring-blue-500" },
                    { label: "Weight", name: "Weight", type: "number", value: patient.Weight, suffix: "kg", color: "bg-green-50 border-green-300 focus:border-green-500 focus:ring-green-500" },
                    { label: "BMI", name: "BMI", type: "number", value: patient.BMI, color: "bg-yellow-50 border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500" },
                    { label: "Blood Pressure", name: "BloodPressure", type: "text", value: patient.BloodPressure, suffix: "mm Hg", color: "bg-purple-50 border-purple-300 focus:border-purple-500 focus:ring-purple-500" },
                    { label: "Insulin", name: "Insulin", type: "number", value: patient.Insulin, color: "bg-pink-50 border-pink-300 focus:border-pink-500 focus:ring-pink-500" },
                    { label: "Glucose", name: "Glucose", type: "number", value: patient.Glucose, suffix: "mg/dL", color: "bg-red-50 border-red-300 focus:border-red-500 focus:ring-red-500" },
                    { label: "Max Heart Rate", name: "maxHeartRate", type: "number", value: patient.maxHeartRate, suffix: "bpm", color: "bg-orange-50 border-orange-300 focus:border-orange-500 focus:ring-orange-500" },
                    { label: "Pregnancies", name: "Pregnancies", type: "number", value: patient.Pregnancies, color: "bg-teal-50 border-teal-300 focus:border-teal-500 focus:ring-teal-500" },
                    {
                        label: "Fasting Blood Sugar > 120",
                        name: "FastingBloodSugar",
                        type: "select",
                        value: patient.FastingBloodSugar,
                        options: [{ value: 0, label: "No" }, { value: 1, label: "Yes" }],
                        color: "bg-indigo-50 border-indigo-300 focus:border-indigo-500 focus:ring-indigo-500"
                    },
                    { label: "Cholesterol", name: "Cholestrol", type: "number", value: patient.Cholestrol, suffix: "mg/dL", color: "bg-lime-50 border-lime-300 focus:border-lime-500 focus:ring-lime-500" }
                ].map((field, index) => (
                    <div key={index} className="flex flex-col">
                        <label className="block text-lg font-medium text-gray-700 mb-1">{field.label}:</label>
                        {field.type === "select" ? (
                            <select
                                name={field.name}
                                value={field.value}
                                onChange={handleInputChange}
                                className={`block w-full rounded-lg border ${field.color} shadow-sm p-1`}
                            >
                                {field.options.map((option, idx) => (
                                    <option key={idx} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        ) : (
                            <div className="relative">
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={field.value}
                                    onChange={handleInputChange}
                                    className={`block w-full rounded-lg border ${field.color} shadow-sm p-1 pr-12`}
                                />
                                {field.suffix && <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">{field.suffix}</span>}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PatientMetricsCard;
