import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginuseForm from "./LoginuseForm";
import validate from './LoginFormValidation';
import { useDispatch, useSelector} from "react-redux";
import { loginAction} from '../actions/loginAction';
import { useHistory} from 'react-router-dom';
export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();

    const {
        values,
        errors,
        alertMessage,
        handleChange,
        handleSubmit,
      } = LoginuseForm(validate);
      const submit = async ()=> {
        console.log(values)
        dispatch(loginAction(values))
        history.push('/home')
      }
    return (
        <div className="container mt-5">
        <form onSubmit={submit}>
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
                {/* <button
            onClick={submit}
        >Redux Login</button> */}
        </form>
    </div>
    )
}
