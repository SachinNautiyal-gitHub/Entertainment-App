import React from 'react'
import styles from './Styles/login.module.css'

const Login = () => {
  return (
     <>
     <div className={styles.login}>
         <div className={styles.container}>
          <h1>Login</h1>
          <input type="email"  id='email' placeholder='Email Address' />
           <input type="text"  id='password' placeholder='Password'/>
           <button>Login to your account</button>
           <p>Don't have an account ? <a href="/signup">Sign Up</a></p>
         </div>
     </div>
     
     
     </>
  )
}

export default Login
