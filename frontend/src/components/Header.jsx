import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center p-3 bg-white border-b border-black h-[9vh] w-[100vw]">
      <div className="font-bold text-2xl flex items-center gap-2">
        <img src="logo.jpeg" alt="logo" width={50} height={50} />
        <p>ZKHealthCare</p>
      </div>
      <nav className='text-xl'>
        <ul className="flex space-x-8">
          <li className="cursor-pointer">
            <Link to = "/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to = "/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className='flex space-x-2'>
        <button onClick={() => navigate('/login')} className="bg-black text-white px-4 py-2 rounded-md hover:opacity-70">Login</button>
        <button onClick={() => navigate('/signup')} className="bg-black text-white px-4 py-2 rounded-md hover:opacity-70">Signup</button>
      </div>
    </header>
  )
}

export default Header