import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/SignUp.css'
const SignUp = () => {
  return (
    <div className='SignUp'>
      <div className='Personal-informations'>
        <input type='text' className='FormInput' id='FirstName' name='FirstName' placeholder='FirstName' autoComplete='off'/>
        <input type='text' className='FormInput' id='LastName' name='LastName' placeholder='LastName' autoComplete='off'/>
      </div>
      <div className='Account-informations'>
        <input type='text' className='FormInput' id='username' name='username' placeholder='User Name' autoComplete='off'/>
        <input type='email' className='FormInput' id='Email' name='Email' placeholder='Email' autoComplete='off'/>
        <input type='password' className='FormInput' id='password' name='password' placeholder='Password' />
        <input type='password' className='FormInput' id='password' name='password' placeholder='Re-Password' />
      </div>
      <p>You have already an account  <Link to={'/'} ><span>Log-in</span></Link></p>
        <button className='SignUpBtn'>Sign Up</button>

    </div>
  )
}

export default SignUp
