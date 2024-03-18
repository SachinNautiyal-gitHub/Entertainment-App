import React, { useContext, useState } from 'react'
import styles from './Styles/login.module.css'
import {Link , useNavigate} from 'react-router-dom'
import { AppContext } from '../Context';

const Login = () => {

  const [credential , setCredential ] = useState({ email :"" , password : ""});
  const navigate = useNavigate();

  const {fetchData} = useContext(AppContext);

   const handleOnSubmit = async(e) =>{
       e.preventDefault();
       
       const data = await fetch ('http://localhost:5000/api/auth/login',{
        method:"POST",
        headers:{
         "Content-Type" : "application/json"
        },
        body: JSON.stringify({email:credential.email, password:credential.password})
       });
       
       const res = await data.json();
       console.log(res);

       if(res.success){
         localStorage.setItem("token", res.authToken);
         alert("logged in Successfully");
         fetchData();
         navigate('/');
       }
       else{
        alert("Invalid Credential");
       }      
   }

   const onchange = (e)=>{
       setCredential({...credential, [e.target.name]:e.target.value})
   }



  return (
     <>
     
     <div className={styles.login}>
     <form onSubmit={handleOnSubmit}>
         <div className={styles.container}>
          <h1>Login</h1>
          <input type="email"  id='email' placeholder='Email Address' name='email' value={credential.email} onChange={onchange} />
           <input type="password" id="password" placeholder='Password' value={credential.password} onChange={onchange} name='password'/>
           <button type='submit' >Login to your account</button>
           <p>Don't have an account ? <Link to={"/signup"}>Sign Up</Link></p>
         </div>

         </form>
     </div>
     
     
     </>
  )
}

export default Login
