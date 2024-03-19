import React, { useContext } from 'react'
import { AppContext } from '../Context'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import styles from './Styles/tvshows.module.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';

const TVShows = () => {
  const { array, bookmark, bookmarkData, addBookMark, removeBookMark } = useContext(AppContext);
  const filteritems = array.filter(item => item.Type === 'series');

  const handleOnclick = async (movieId) => {
    if (bookmark.find(movie => movie._id === movieId)) {
        await removeBookMark(movieId);
    }
    else {
        await addBookMark(movieId);
    }
    bookmarkData();
}


  return (
    <>
      <p className={styles.heading}>TV Series</p>
      <div className={styles.container}>
        {filteritems.map((item) => {
          return (
            <div className={styles.itemcontainer}>
              <img src={item.Poster} alt="" />
              <p className={styles.details}>{item.Year} {item.Type === "movie" ? <LocalMoviesIcon className={styles.icon} /> : <LiveTvIcon className={styles.icon} />} {item.Type}</p>
              <p className={styles.title}>{item.title}
                <BookmarkIcon style={{ color: bookmark.find(movie => movie._id === item._id) ? '#FC4747' : '#5A698F' }}
                  onClick={() => handleOnclick(item._id)} /> </p>
            </div>
          )
        })
        }
      </div>
    </>
  )

}

export default TVShows
