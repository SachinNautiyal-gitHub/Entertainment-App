import React, { useContext } from 'react'
import { AppContext } from '../Context'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import styles from './Styles/tvshows.module.css'

const TVShows = () => {
  const {array} = useContext(AppContext);
  const filteritems = array.filter(item => item.Type === 'series');

  
  return (
    <>
    <p className={styles.heading}>TV Series</p>
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

export default TVShows
