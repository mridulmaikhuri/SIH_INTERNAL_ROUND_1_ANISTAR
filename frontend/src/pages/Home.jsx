import React from 'react'
import { BasicInfo, Department } from '../components'

function Home() {
  return (
    <main className='ml-5'>
      <BasicInfo />
      <h2 className="text-4xl font-bold mb-8 ml-10">Departments</h2>
      <div className="flex gap-4 m-10">
        <Department image="physician.jpeg" title="Physician" />
        <Department image="paediatric.jpeg" title="Pediatrics" />
        <Department image="Orthopedics.jpeg" title="Orthopedics" />
        <Department image="Cardiology.jpeg" title="Cardiology" />
        <Department image="Neurology.jpeg" title="Neurology" />
      </div>
    </main>
  )
}

export default Home