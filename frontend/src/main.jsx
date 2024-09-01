import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './Admin.jsx'
import User from './User.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Login from './pages/LogIn/login.jsx'
import Signup from './pages/SignUp/signup.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import UserDashboard from './pages/UserDashboard.jsx'

import About from './pages/About/about.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import UserAnalytics from './pages/UserAnalytics.jsx'
import UserReport from './pages/UserReport.jsx'
import PatientDashboard from './pages/PatientDashboard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/about",
        element: <About />
      }
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "login",
        element: <AdminLogin />,
      },
      {
        path: "dashboard",
        element: (
          <AuthLayout url='/admin/login'>
            {" "}
            <AdminDashboard/>
          </AuthLayout>
        )
      },
      {
        path: "patient/:patientId",
        element: (
          <AuthLayout url='/admin/login'>
            {" "}
            <PatientDashboard />
          </AuthLayout>
        )
      }
    ]
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: "dashboard/:userId",
        element: (
          <AuthLayout>
            {" "}
            <UserDashboard />
          </AuthLayout>
        )
      },
      {
        path: "analytics/:userId",
        element: (
          <AuthLayout>
            {" "}
            <UserAnalytics />
          </AuthLayout>
        )
      },
      {
        path: "report/:userId",
        element: (
          <AuthLayout>
            {" "}
            <UserReport />
          </AuthLayout>
        )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
