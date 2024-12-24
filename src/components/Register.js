import React from 'react'
import './Register.css'
import {Link}from 'react-router-dom'
import{FaUser,FaLock,FaEnvelope,FaPhone  } from "react-icons/fa"


function Register() {
  return (

    <div className='containerr'>
      <div className='form-boxr login'>
        <form action=''>
          <h1>Register</h1>
          <div className='input-boxr'>
            <input type='text' placeholder='username' required/>
            <FaUser className='icon'/>
          </div>
          <div className='input-boxr'>
            <input type='email' placeholder='email' required/>
            <FaUser className='icon'/>
          </div>

          <div className='input-boxr'>
            <input type='passworrd' placeholder='password' required/>
            <FaLock className='icon'/>
          </div>

         <div className='remember-forgotr'>
          <label><input type='checkbox'/>remember me</label>
          <a href='#'>forgot password?</a>

          
         </div>

         
         <button  type='submit'>Register</button>


         

         


         
         
         

        
        </form>

      </div>

    </div>
    
  )
}

export default Register
