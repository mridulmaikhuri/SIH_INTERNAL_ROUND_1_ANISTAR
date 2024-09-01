import React from 'react'
import { PatientGaugeChart } from '../components';
import { useParams } from 'react-router-dom';

const patientData = {
  bp: '120/80',
  heartRate: 75,
  insulin: 120,
  bmi: 23,
  cholesterol: 190   
};

function UserAnalytics() {
  const { userId } = useParams();
  return (
    <div className='min-h-screen flex flex-col w-[80vw]'>
      <h1 className='text-5xl mx-auto font-extrabold font-serif mt-8'>Patient Health Dashboard</h1>
      <PatientGaugeChart
        bp={patientData.bp}
        heartRate={patientData.heartRate}
        insulin={patientData.insulin}
        bmi={patientData.bmi}
        cholesterol={patientData.cholesterol}
      />
    </div>
  )
}

export default UserAnalytics