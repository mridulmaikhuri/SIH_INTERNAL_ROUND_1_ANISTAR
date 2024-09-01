import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserNavbar } from './components'

function User() {
  return (
    <div className='min-w-[100vw] min-h-[100vh] flex'>
        <UserNavbar />
        <Outlet />
    </div>
  )
}

export default User