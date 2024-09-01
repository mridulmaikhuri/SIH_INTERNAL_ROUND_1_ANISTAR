import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SideNavbar = () => {
    const { userId } = useParams();

  const patient = {
    name: 'John Doe',
    image: '/user.png', // Replace with actual image URL
  };

  return (
    
    <div className="flex flex-col justify-between h-screen w-[20vw] bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center mt-5">
        <img
          src={patient.image}
          alt="Patient"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-semibold">{patient.name}</h2>
      </div>

      <nav className="flex flex-col mt-16 space-y-4">
        <Link
          to={`/user/dashboard/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Basic Info
        </Link>
        <Link
          to={`/user/analytics/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Analytics
        </Link>
        <Link
          to={`/user/report/${userId}`}
          className="text-lg hover:bg-gray-700 p-2 rounded"
        >
          Report
        </Link>
      </nav>

      <div className="mt-auto mb-10">
        <button
          className="w-full bg-red-600 hover:bg-red-700 text-lg py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNavbar;