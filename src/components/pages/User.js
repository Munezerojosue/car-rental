import React, { useState } from 'react';
import './User.css'
import {Link}from 'react-router-dom'
import{FaUser,FaLock,FaEnvelope,FaPhone  } from "react-icons/fa"





 

  
function User() {
  
  return (

    <div className='wrapper'>
      <div className='form-box login'>
        <form action=''>
          <h1>login</h1>
          <div className='input-box'>
            <input type='text' placeholder='username' required/>
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <input type='passworrd' placeholder='password' required/>
            <FaLock className='icon'/>
          </div>

         <div className='remember-forgot'>
          <label><input type='checkbox'/>remember me</label>
          <a href='#'>forgot password?</a>

         </div>

         <button type='submit'>login</button>

         <div className='registered-link'>don't have an account? <a href='./register'>register</a></div>
          



        </form>

      </div>

    </div>
    
    
       
        
      
       
      
   
  )
}

export default User;
