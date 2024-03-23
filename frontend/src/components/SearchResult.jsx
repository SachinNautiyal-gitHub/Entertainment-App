import React, { useContext } from 'react'
import styles from './Styles/searchresult.module.css'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AppContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const SearchResult = () => {
  
    const navigate = useNavigate();
    const {array, query, setCurrentWatching} = useContext(AppContext);
    const searchinfo = array.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));

    const handleMovieclick = ()=>{
        navigate('/movies');
    }

    const handleTvclick = () =>{
        navigate('/tvshows');
    }

    const navigateToWatching = async(id) => {
        const movie = await array.find(item => item._id ===id);
        setCurrentWatching(movie);
        navigate('/watch')
      }


 
    if(query.length < 1){
        return (
            <>
             <p className={styles.heading}>Browse All</p>
             <div className={styles.container}>
               <div className={styles.movieContainer} onClick={handleMovieclick}>
                   <h1>Movies</h1>
                   <LocalMoviesIcon className={styles.movieIcon}/>
               </div>
               <div className={styles.tvContainer} onClick={handleTvclick}>
                  <h1>Series</h1>
                  <LiveTvIcon className={styles.tvIcon}/>
               </div>
             </div>
              
            </>
       )
    }
else {
    if (searchinfo.length < 1){
        return (
            <p>no result for " {query} "</p>
        )
    }


  else return (
    <>     
            <div className={styles.container}>
                {searchinfo && searchinfo.map((item) => {
                    return (
                        <div className={styles.itemcontainer} key={item._id}>

                            <img src={item.Poster} alt="" onClick={()=>navigateToWatching(item._id)} />
                            <p className={styles.details}>{item.Year} {item.Type === "movie" ? <LocalMoviesIcon className={styles.icon} /> : <LiveTvIcon className={styles.icon} />} {item.Type}</p>
                            <p className={styles.title}>{item.title} 
                                </p>
                        </div>
                    )
                })
                }
            </div>
    </>
  )
}
}

export default SearchResult
