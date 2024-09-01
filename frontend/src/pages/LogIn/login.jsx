import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import React from 'react';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value });
    };
    
    const handleSubmit = async  (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/patient/login', { // Make sure the URL is correct
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.msg || 'Something went wrong');
            }

            const result = await response.json();
            console.log(result); // Handle success response

            // Navigate to user dashboard or home page after successful login
            navigate(`/user/dashboard/${result.userId}`); // Adjust the URL as needed
        } catch (err) {
            console.error(err.message); // Handle error message
            // Optionally, you can set an error message in state to display to the user
        }
    }

    return (
    <div className={styles.login_container}>
        <div className={styles.login_form_container}>
            <div className={styles.left}>
                <h1>New Here?</h1>
                <Link to="/Signup">
                    <button type='button' className={styles.white_btn}>
                        Create Account
                    </button>
                </Link>
                <Link to="/admin/login">
                    <button type='button' className={styles.white_btn}>
                        Admin Sign In
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