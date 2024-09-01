import React from 'react';

function PatientMetricsCard({ patient }) {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Physical & Medical Metrics</h2>
            <p><strong>Height:</strong> {patient.height} m</p>
            <br />
            <p><strong>Weight:</strong> {patient.weight} kg</p>
            <br />
            <p><strong>Blood Pressure:</strong> {patient.bp} mm Hg</p>
            <br />
            <p><strong>Insulin:</strong> {patient.insulin}</p>
            <br />
            <p><strong>Glucose:</strong> {patient.glucose} mg/dL</p>
            <br />
            <p><strong>Max Heart Rate:</strong> {patient.heart_rate} bpm</p>
            <br />
            <p><strong>Pregnancies:</strong> {patient.pregnancies}</p>
            <br />
            <p><strong>Fasting Blood Sugar {'>'} 120:</strong> {patient.fasting_blood_sugar ? 'Yes' : 'No'}</p>
            <br />
            <p><strong>Cholesterol:</strong> {patient.cholestrol} mg/dL</p>
        </div>
    );
}

export default PatientMetricsCard;
