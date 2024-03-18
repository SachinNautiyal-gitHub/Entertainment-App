import React, { useContext } from 'react'
import { AppContext } from '../Context'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import styles from './Styles/homecompo.module.css'
import Trending from './Trending';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const HomeComponent = () => {

    const { array } = useContext(AppContext);
    console.log(array);
    

    if(array.length === 0){
        return <h1 style={{color:"white"}}>Loading ...</h1>
    }

  else  return (
        <>
         <Trending/>
        <p className={styles.heading}>Recommended for you</p>
           <div className={styles.container}>
            {array && array.map((item) => {
                return (
                    <div className={styles.itemcontainer} key={item._id}>
                        <BookmarkIcon className={styles.bookmark}/>
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

export default HomeComponent
