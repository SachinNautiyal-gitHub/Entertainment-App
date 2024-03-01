import React from 'react'
import styles from './Styles/signup.module.css'

const SignUp = () => {
  return (
    <div className={styles.signup}>
         <div className={styles.container}>
          <h1>Sign Up</h1>
          <input type="email"  id='email' placeholder='Email Address' />
           <input type="text"  id='password' placeholder='Enter a Password'/>
           <input type="text"  id='password' placeholder='Confirm Password'/>
           <button>Create an account</button>
           <p>Already have an account ? <a href="/">Login</a></p>
         </div>
     </div>
  )
}

export default SignUp
