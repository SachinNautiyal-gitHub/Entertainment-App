import React, { useState } from 'react'
import styles from './Styles/signup.module.css'
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
 
  const [credential , setCredential] = useState({name:"", email:"", password:""});
  const navigte = useNavigate;
   
  const handleOnSubmit  = async(e)=>{
    e.preventDefault();

      const data = await fetch('http://localhost:5000/api/auth/signup',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({name:credential.name, email:credential.email, password:credential.password , })
      })
     
      const res = await data.json();
      console.log(res);

      if(res.success){
         localStorage.setItem('token', res.authToken);
         alert("signup Successfully");
        //  navigte('/login');
      }
      else{
        alert("Invalid Credential");
      }
  }

  const onchange = (e)=>{
    setCredential({...credential, [e.target.name]:e.target.value})
  }


  return (
    <div className={styles.signup}>

       <form onSubmit={handleOnSubmit}>
         <div className={styles.container}>
          <h1>Sign Up</h1>
          <input type="text"  id='name' name='name' value={credential.name} placeholder='Enter your name' onChange={onchange} />
           <input type="email"  id='email' name='email' value={credential.email} placeholder='Email Address' onChange={onchange} />
           <input type="text"  id='password' name='password' value={credential.password} placeholder='Password' onChange={onchange} />
           <button>Create an account</button>
           <p>Already have an account ? <Link to={'/login'}>Login</Link></p>
         </div>
         </form>
     </div>
  )
}

export default SignUp
