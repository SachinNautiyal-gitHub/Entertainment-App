import React, { useContext } from 'react'
import { AppContext } from '../Context'
import styles from './Styles/watch.module.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Footer from '../components/Footer';

const Watch = () => {

    const { currentWatching } = useContext(AppContext);
    let movie = currentWatching;

    return (
        <>
        <div className={styles.watch}>
            <div className={styles.container}>
                <iframe src={movie.VideoLink} title={movie.title} className={styles.video} ></iframe>
            </div>
            <div className={styles.container}>
                <p>{movie.title} {movie.Type === "movie" ? <LocalMoviesIcon className={styles.icon} /> : <LiveTvIcon className={styles.icon} />}
                </p>
                <p>{movie.Year} | Genre: {movie.Genre}</p> 
                <p>Plot : {movie.Plot}</p>
                <p>Actors : {movie.Actors}</p>
                <p>ImdbRating : {movie.imdbRating} &#9733;</p>
                
            </div>
        </div>
             <Footer/>
        </>
    )
}

export default Watch
