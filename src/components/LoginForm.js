import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginuseForm from "./LoginuseForm";
import validate from './LoginFormValidation';

export default function LoginForm() {
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    const {
        values,
        errors,
        alertMessage,
        handleChange,
        handleSubmit,
      } = LoginuseForm(validate);
    function handleLogin(e) {}
    return (
        <div className="container mt-5">
        <form onSubmit={handleSubmit}>
            <h3>Log In</h3>
            <br />
            {!alertMessage.hidden ? <div className="alert alert-primary" role="alert">
                  {alertMessage.message}
                </div> : <br />}
            <div className="form-group"> 
                <label>Email</label>
                <input className="form-control" type="email" name="email" placeholder="Enter Email" onChange={handleChange} onBlur={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}             </div>
            <br />

            <div className="form-group">
                <label>Password</label>
                <input className="form-control" placeholder="Enter Password" type="password" name="password" onChange={handleChange} onBlur={handleChange} value={values.password || ''} required />
                    {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}              </div>
            <br />
            <button type="submit" disabled  ={errors.password || errors.email} className="btn btn-dark btn-lg btn-block">Login</button>
            {/* <Link to='/register'>Register Here</Link> */}
            <p className="forgot-password text-right">
                    Dont have an account? <Link to='/register'>Register Here</Link>
                </p>
        </form>
    </div>
    )
}
