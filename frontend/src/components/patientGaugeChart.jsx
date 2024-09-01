import React from 'react';
import { FaHeartbeat, FaWeight, FaSyringe, FaTachometerAlt, FaTint } from 'react-icons/fa';

const getStatus = (value, normalRange) => {
  if (value < normalRange[0]) return 'low';
  if (value > normalRange[1]) return 'high';
  return 'normal';
};

const getColor = (status) => {
  switch (status) {
    case 'low': return '#87CEEB';  // Light Blue for Low
    case 'high': return '#FF6347';  // Red for High
    case 'normal': return '#32CD32';  // Green for Normal
    default: return 'gray';
  }
};

const PatientHealthVisual = ({ bp, heartRate, insulin, bmi, cholesterol }) => {
  const [systolic, diastolic] = bp.split('/').map(Number);

  const bpStatus = getStatus(systolic, [90, 120]) + '/' + getStatus(diastolic, [60, 80]);
  const heartRateStatus = getStatus(heartRate, [60, 100]);
  const insulinStatus = getStatus(insulin, [2, 25]); // assuming fasting insulin
  const bmiStatus = getStatus(bmi, [18.5, 24.9]);
  const cholesterolStatus = getStatus(cholesterol, [125, 200]);

  const healthData = [
    {
      label: 'Blood Pressure',
      icon: <FaTachometerAlt size={50} />, // Increased icon size
      value: `${systolic}/${diastolic} mmHg`,
      status: bpStatus.split('/')[0] + '/' + bpStatus.split('/')[1],
      color: getColor(bpStatus.split('/')[0]),
    },
    {
      label: 'Heart Rate',
      icon: <FaHeartbeat size={50} />, // Increased icon size
      value: `${heartRate} bpm`,
      status: heartRateStatus,
      color: getColor(heartRateStatus),
    },
    {
      label: 'Insulin Level',
      icon: <FaSyringe size={50} />, // Increased icon size
      value: `${insulin} µU/mL`,
      status: insulinStatus,
      color: getColor(insulinStatus),
    },
    {
      label: 'BMI',
      icon: <FaWeight size={50} />, // Increased icon size
      value: `${bmi}`,
      status: bmiStatus,
      color: getColor(bmiStatus),
    },
    {
      label: 'Cholesterol',
      icon: <FaTint size={50} />, // Using a droplet icon for cholesterol
      value: `${cholesterol} mg/dL`,
      status: cholesterolStatus,
      color: getColor(cholesterolStatus),
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'start', flexWrap: 'wrap', marginTop: '20px' }} className='gap-4 ml-10'>
      {healthData.map((data, index) => (
        <div key={index} style={{
          backgroundColor: data.color,
          borderRadius: '15px', // Increased border radius for a softer look
          padding: '40px', // Increased padding for larger cards
          margin: '20px', // Increased margin for spacing between cards
          width: '300px', // Increased width of each card
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Slightly increased box shadow for more depth
        }}>
          {data.icon}
          <h3 style={{ fontSize: '24px', margin: '10px 0' }}>{data.label}</h3> {/* Increased font size */}
          <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '10px 0' }}>{data.value}</p> {/* Increased font size */}
          <p style={{ fontSize: '20px', margin: '10px 0' }}>Status: {data.status}</p> {/* Increased font size */}
        </div>
      ))}
    </div>
  );
};

export default PatientHealthVisual;
