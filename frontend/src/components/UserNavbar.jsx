import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SideNavbar = () => {
  const { userId } = useParams();

  const patient = {
    name: 'John Doe',
    image: '/user.png',
  };

  return (
    <div className="flex flex-col justify-between h-screen w-[20vw] bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center mt-5">
        
        <img
          src="/logo.jpeg"
          alt="zkHealthCare"
          className="w-28 h-auto mb-3"
        />
        <h1>ZK HEALTHCARE</h1>
      </div>
      <br />
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
