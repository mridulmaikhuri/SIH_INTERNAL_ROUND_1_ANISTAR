import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import React from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });


    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value });
    };
    
    const handleSubmit = async  (e) => {
        e.preventDefault();
        // Transfer to login page after storing SignUp data in BACKEND 
        // If any backend error occurs Return that error
        // navigate("/login") change this so it navigates to Page after Login

    }

    return (
    <div className={styles.login_container}>
        <div className={styles.login_form_container}>
            <div className={styles.left}>
                {/* <h1>Create Account</h1> */}
                <Link to="/Signup">
                    <button type='button' className={styles.white_btn}>
                        Create Account
                    </button>
                </Link>
                <Link to="/admin/login">
                    <button type='button' className={styles.white_btn}>
                        Admin Login
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                    <h1>Login to your Account</h1>
                    <input
                        type = 'email'
                        placeholder = 'Email ID'
                        name = 'email'
                        onChange = {handleChange}
                        value = {data.email}
                        required
                        className= {styles.input}
                    />
                    <input
                        type = 'password'
                        placeholder = 'Password'
                        name = 'password'
                        onChange = {handleChange}
                        value = {data.password}
                        required
                        className= {styles.input}
                    />
                    {/* add a return for error message here from handleSubmit*/}
                    <button type="submit" className={styles.green_btn}>
                        Log In
                    </button>
                </form>



            </div>
        </div>
    </div>
  )
}

export default Login