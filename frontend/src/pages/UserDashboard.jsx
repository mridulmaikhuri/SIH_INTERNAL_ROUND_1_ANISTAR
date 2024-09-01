import React from 'react'
import { useParams } from 'react-router-dom'

function UserDashboard() {
    const {userId} = useParams();
  return (
    <div>UserDashboard</div>
  )
}

export default UserDashboard