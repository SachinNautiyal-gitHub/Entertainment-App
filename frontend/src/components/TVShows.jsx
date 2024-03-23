import React, { useContext } from 'react'
import { AppContext } from '../Context'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import styles from './Styles/tvshows.module.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useNavigate } from 'react-router-dom';

const TVShows = () => {
  const { array, bookmark, bookmarkData, addBookMark, removeBookMark, setCurrentWatching } = useContext(AppContext);
  const navigate = useNavigate();
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

const navigateToWatching = async(id) => {
  const movie = await array.find(item => item._id ===id);
  setCurrentWatching(movie);
  navigate('/watch')
}


  return (
    <>
      <p className={styles.heading}>TV Series</p>
      <div className={styles.container}>
        {filteritems.map((item) => {
          return (
            <div className={styles.itemcontainer}>
              <img src={item.Poster} alt="" onClick={()=>navigateToWatching(item._id)} />
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
