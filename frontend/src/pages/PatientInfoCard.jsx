import React from 'react';

function PatientInfoCard({ patient }) {
    return (
        <div>
            <img src="/user.png"
            alt="Patient"
            className="w-22 h-auto mb-3 mx-auto"
        />
            <h2 className="text-3xl font-semibold mb-4 text-center">Patient Information</h2>
            
            <div className='text-xl ml-5 mt-5'>
                <p><strong>ID:</strong> {patient.PID}</p>
                <p><strong>Name:</strong> {patient.Pname}</p>
                <p><strong>Gender:</strong> {patient.Gender === 0 ? 'Female' : 'Male'}</p>
                <p><strong>Age:</strong> {patient.Age}</p>
            </div>
        </div>
    );
}

export default PatientInfoCard;
