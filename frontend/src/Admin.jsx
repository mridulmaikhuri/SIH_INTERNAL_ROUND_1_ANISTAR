import React from 'react'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
    <div className='min-w-[100vw] min-h-[100vh]'>
        <Outlet />
    </div>
  )
}

export default Admin