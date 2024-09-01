import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function AuthLayout({ children, url = "/login"}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = true;

    useEffect(() => {
        if (authStatus !== true) {
            navigate(url)
        }
        setLoader(false)
    }, [authStatus, navigate])
    
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout