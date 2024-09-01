import React from 'react'
import { useParams } from 'react-router-dom'

function UserDashboard() {
    const {userId} = useParams();
  return (
    <div>UserDashboard My name is Himanshu Mallick</div>
  )
}

export default UserDashboard
