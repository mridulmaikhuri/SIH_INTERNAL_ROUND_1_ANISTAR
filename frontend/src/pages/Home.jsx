import React from 'react'
import { BasicInfo, Department } from '../components'

function Home() {
  return (
    <div className=''>
      <BasicInfo />
      <div className='bg-white shadow rounded-lg p-6 mb-10 w-[95vw] mx-auto'>
          <h2 className="text-4xl font-bold mb-8 ml-5">Departments</h2>
          <div className="flex gap-4 m-5">
            <Department image="physician.jpeg" title="Physician" />
            <Department image="paediatric.jpeg" title="Pediatrics" />
            <Department image="Orthopedics.jpeg" title="Orthopedics" />
            <Department image="Cardiology.jpeg" title="Cardiology" />
            <Department image="Neurology.jpeg" title="Neurology" />
          </div>
      </div>
    </div>
  )
}

export default Home