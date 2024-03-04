import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Styles/home.module.css'
import Search from '../components/Search'

const Home = () => {
  return (
   <>
   
    <div className={styles.home}>
      <div className={styles.firstsection}>
    <Navbar/>
      </div>
     <div className={styles.secondsection}>
      <Search/>
     </div>
    </div>


   
   
 
   
   
   </>
  )
}

export default Home
