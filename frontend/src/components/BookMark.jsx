import React, { useContext } from 'react'
import { AppContext } from '../Context'
import styles from './Styles/bookmark.module.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const BookMark = () => {
  
  const {bookmark , removeBookMark} = useContext(AppContext);

  return (
   <>
   <p className={styles.heading}>Your BookMarks</p>
    <div className={styles.container}>
            {bookmark && bookmark.map((item) => {
                return (
                    <div className={styles.itemcontainer} key={item._id}>
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

export default BookMark
