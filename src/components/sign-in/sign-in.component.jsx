import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {

  const [ signInData, setSignInData ] = useState({
    email: '',
    password: ''
  })
  
  const handleSubmit = event => {
    event.preventDefault()

    setSignInData({
      email: '',
      password: ''
    })
  }

  const handleChange = event => {
    const {value, name} = event.target

    setSignInData( oldInfo => ({
      ...oldInfo,
      [name]: value
    }))
  }

  return (
    <div className='sign-in'>

      <h2>I already have an account</h2>

      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        
        <FormInput 
          type="email" 
          name='email' 
          label='Email'
          value={signInData.email} 
          handleChange={handleChange}
          required 
        />

        <FormInput 
          type="password" 
          name='password' 
          label='Password'
          value={signInData.password}
          handleChange={handleChange}
          required />
        
        <div className='buttons'>
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
        
      </form>

    </div>
  )
}

export default SignIn
