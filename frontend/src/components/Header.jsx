import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-white border-b border-black h-[9vh]">
      <div className="font-bold text-2xl">ZKCare</div>
      <nav>
        <ul className="flex space-x-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Appointment</li>
          <li className="cursor-pointer">About Us</li>
        </ul>
      </nav>
      <button className="bg-black text-white px-4 py-2 rounded-md">Login</button>
    </header>
  )
}

export default Header