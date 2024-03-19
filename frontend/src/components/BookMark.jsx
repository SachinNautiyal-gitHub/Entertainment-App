import React, { useContext } from 'react'
import { AppContext } from '../Context'
import styles from './Styles/bookmark.module.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const BookMark = () => {
  
  const {bookmark , removeBookMark, bookmarkData} = useContext(AppContext);

  const handleOnClick = async (id) =>{
     await removeBookMark(id);
  }

  if(bookmark.length < 1){
     return (
        <>
        
        <p className={styles.heading}>Your BookMarks</p>
        <div className={styles.container}>
        <h2 style={{color:"white"}}>No Bookmark Found</h2>
        </div>
        </>
     )
  }

  return (
   <>
   <p className={styles.heading}>Your BookMarks</p>
    <div className={styles.container}>
            {bookmark && bookmark.map((item) => {
                return (
                    <div className={styles.itemcontainer} key={item._id}>
                        <img src={item.Poster} alt="" />
                        <p className={styles.details}>{item.Year} {item.Type === "movie" ? <LocalMoviesIcon className={styles.icon}/> : <LiveTvIcon className={styles.icon} />} {item.Type}</p>
                        <p className={styles.title}>{item.title} 
                        <button className={styles.button} onClick={() =>handleOnClick(item._id)} >remove bookmark</button></p>
                    </div>
                )
            })
            }
        </div>
   
   
   </>
  )
}

export default BookMark
