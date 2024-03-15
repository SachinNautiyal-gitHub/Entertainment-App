import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Styles/home.module.css'
import Search from '../components/Search'
import HomeComponent from '../components/HomeComponent'
import Trending from '../components/Trending'
import {Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
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


const HomeLayout = ()=>{
   <>
   <Trending/>
   <HomeComponent/>  
   </>
};

export default Home
