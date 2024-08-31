import React from 'react'
import { FaBeer, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer class="bg-gray-800 text-gray-300 py-8 mt-10 max-w-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">

        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 class="text-white text-xl font-bold">ZKHealthCare</h3>
          <p class="mt-2">ZKHealthCare Medical Institute is a state-of-the-art facility dedicated to providing comprehensive healthcare services with compassion and expertise.</p>
        </div>

        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 class="text-white text-lg font-semibold">Quick Links</h4>
          <ul class="mt-2 space-y-2">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">Features</a></li>
            <li><a href="#" class="hover:text-white">Pricing</a></li>
            <li><a href="#" class="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div class="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 class="text-white text-lg font-semibold">Contact Us</h4>
          <p class="mt-2">123 Memory Lane, Suite 456</p>
          <p>Email: <a href="#" class="hover:text-white">contact@health.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>

        <div class="w-full md:w-1/4">
          <h4 class="text-white text-lg font-semibold">Follow Us</h4>
          <div class="mt-2 flex flex-col gap-2">
            <a href="#" class="text-2xl hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" class="text-2xl hover:text-white">
              <FaBeer />
            </a>
            <a href="#" class="text-2xl hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" class="text-2xl hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      <div class="mt-8 text-center text-gray-400">
        <p>&copy; 2024 ZKHealthCare. All rights reserved.</p>
      </div>
    </footer>

  )
}

export default Footer