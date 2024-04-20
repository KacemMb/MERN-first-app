import React from 'react'
import UserNameInput from '../Components/UserNameInput'
import PasswordInput from '../Components/PasswordInput'
import LogBtn from '../Components/LogBtn'
import '../Style/LogIn.css'
import RememberMe from '../Components/RememberMe'

const LogIn = () => {
  return (
    
    <div className='LogIn'>
        <UserNameInput />
        <PasswordInput />
        <div className='forget'>
            <RememberMe />
            <p className='forgetPWD'>forget password</p>
        </div>
        <LogBtn name='Log In' />
        <p className='signUpP'>you don't have an account! <span className='signUpLink'> sign up</span> </p>
    </div>
  )
}

export default LogIn
