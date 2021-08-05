import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import useForm from "./useForm";
import validate from './RegistrationFormValidation';
import { connect } from 'react-redux';
import {registrationAction} from '../actions/registrationAction'
import { useDispatch, useSelector } from "react-redux";
const  RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    alertMessage,
    handleChange,
    handleSubmit,
  } = useForm(validate);

const submit = async ()=> {
  console.log(values)
  dispatch(registrationAction(values))
}
  // const state = useSelector(state => state.register.length)
    return (
        <div className='container mt-5'>
            <form onSubmit={submit}>
                <h3>Register</h3>
                <br />

                {!alertMessage.hidden ? <div className="alert alert-primary" role="alert">
                  {alertMessage.message}
                </div> : <br />}
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={handleChange} onBlur={handleChange} value={values.name || ''} required />
                    {errors.name && (
                    <p className="text-danger">{errors.name}</p>
                  )} 
                </div>
                <br />
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" name="phone" onChange={handleChange} onBlur={handleChange} value={values.phone || ''} required />
                    {errors.phone && (
                    <p className="text-danger">{errors.phone}</p>
                  )} 
                </div>
                <br />
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" placeholder="Enter Email" onChange={handleChange} onBlur={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )} 
                  </div>
                <br />
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" placeholder="Enter Password" type="password" name="password" onChange={handleChange} onBlur={handleChange} value={values.password || ''} required />
                    {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
                </div>
                <br />
                <button type="submit" disabled  ={errors.password || errors.email || errors.phone} className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to='/login'>Login Here</Link>
                </p>
                {/* <button
            onClick={submit}
        >Redux Register</button> */}
            </form> 
        </div>
    )
}

export default connect()(RegistrationForm);