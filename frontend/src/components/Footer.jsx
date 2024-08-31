import React from 'react'
import { FaBeer, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 max-w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-6 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-white text-xl font-bold">ZKHealthCare</h3>
          <p className="mt-2 mr-6">ZKHealthCare Medical Institute is a state-of-the-art facility dedicated to providing comprehensive healthcare services with compassion and expertise.</p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-white text-lg font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-white text-lg font-semibold">Contact Us</h4>
          <p className="mt-2">123 Memory Lane, Suite 456</p>
          <p>Email: <a href="#" className="hover:text-white">contact@health.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div className="w-full md:w-1/4">
          <h4 className="text-white text-lg font-semibold">Follow Us</h4>
          <div className="mt-2 flex flex-col gap-2">
            <a href="#" className="text-2xl hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-white">
              <FaBeer />
            </a>
            <a href="#" className="text-2xl hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 ZKHealthCare. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer