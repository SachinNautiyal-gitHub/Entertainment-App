import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styles from './Styles/home.module.css'
import Search from '../components/Search'
import HomeComponent from '../components/HomeComponent'
import Trending from '../components/Trending'
import {Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context'

const Home = () => {
   
   const {fetchData} = useContext(AppContext);
   const navigate = useNavigate();
   
   useEffect(()=>{
    navigate();
   },[]);


  if(!localStorage.getItem('token')){
    navigate('/login');
  }
  else return (
   <>
   
    <div className={styles.home}>
      <div className={styles.firstsection}>
    <Navbar/>
      </div>
     <div className={styles.secondsection}>
      <Search/>
     <Outlet/>
     </div>

    </div>
    <Footer/>
   </>
  )
};
export default Home
