import React from 'react';

function PatientHealthDetails({ patient }) {
    return (
        <div>
            <h2 className="text-3xl font-semibold mb-4">Health Details</h2>
            <p><strong>Symptoms:</strong> {patient.symptoms}</p>
            <p><strong>Remarks:</strong> {"Everything is fine "}</p>
        </div>
    );
}

export default PatientHealthDetails;
