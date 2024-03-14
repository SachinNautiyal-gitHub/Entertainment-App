import React from 'react'
import Navbar from '../components/Navbar'
import styles from './Styles/home.module.css'
import Search from '../components/Search'
import HomeComponent from '../components/HomeComponent'
import Trending from '../components/Trending'

const Home = () => {
  return (
   <>
   
    <div className={styles.home}>
      <div className={styles.firstsection}>
    <Navbar/>
      </div>
     <div className={styles.secondsection}>
      <Search/>
      <Trending/>
      {/* <HomeComponent/> */}
     </div>
    </div>


   
   
 
   
   
   </>
  )
}

export default Home
