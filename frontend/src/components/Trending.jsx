import React, { useContext } from 'react'
import styles from './Styles/trending.module.css'
import { AppContext } from '../Context'

const Trending = () => {

 const {array}  = useContext(AppContext);
 const filteredMovies = array.filter(movie=> movie.Year >= 2019);

  return (
    <>
    <h1>Trending</h1>
    <div className={styles.trending} >{
       filteredMovies.map((item)=>{
        return <div className={styles.frameContainer} key={item._id}>
          
        
        <iframe src='https://www.dailymotion.com/embed/video/x8hr0l0' frameborder="0" height='250px' width='500px' ></iframe>


        </div>
       })
    }  
    </div>
    </>
  )
}

export default Trending
