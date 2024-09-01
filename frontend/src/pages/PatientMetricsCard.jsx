import React from 'react';

function PatientMetricsCard({ patient }) {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Physical & Medical Metrics</h2>
            <p><strong>Height:</strong> {patient.Height} m</p>
            <br />
            <p><strong>Weight:</strong> {patient.Weight} kg</p>
            <br />
            <p><strong>BMI:</strong> {patient.BMI}</p>
            <br />
            <p><strong>Blood Pressure:</strong> {patient.BloodPressure} mm Hg</p>
            <br />
            <p><strong>Insulin:</strong> {patient.Insulin}</p>
            <br />
            <p><strong>Glucose:</strong> {patient.Glucose} mg/dL</p>
            <br />
            <p><strong>Max Heart Rate:</strong> {patient.maxHeartRate} bpm</p>
            <br />
            <p><strong>Pregnancies:</strong> {patient.Pregnancies}</p>
            <br />
            <p><strong>Fasting Blood Sugar {'>'} 120:</strong> {patient.FastingBloodSugar ? 'Yes' : 'No'}</p>
            <br />
            <p><strong>Cholesterol:</strong> {patient.Cholestrol} mg/dL</p>
        </div>
    );
}

export default PatientMetricsCard;
