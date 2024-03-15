import React, { useContext } from 'react'
import { AppContext } from '../Context'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import styles from './Styles/movie.module.css'

const Movies =() => {
 
  const {array} = useContext(AppContext);
  const filteritems = array.filter(item => item.Type === 'movie');

  
  return (
    <>
    <p className={styles.heading}>Movies</p>
   <div className={styles.container}>
    {filteritems.map((item) => {
        return (
            <div className={styles.itemcontainer}>
                <img src={item.Poster} alt="" />
                <p className={styles.details}>{item.Year} {item.Type === "movie" ? <LocalMoviesIcon className={styles.icon}/> : <LiveTvIcon className={styles.icon} />} {item.Type}</p>
                <p className={styles.title}>{item.title}</p>
            </div>
        )
    })
    }
  </div>
</>
  )
}

export default Movies
