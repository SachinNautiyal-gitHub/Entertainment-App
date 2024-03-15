import React from 'react'
import styles from './Styles/navbar.module.css'
import MovieIcon from '@mui/icons-material/Movie';
import WindowIcon from '@mui/icons-material/Window';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import {Link} from 'react-router-dom'

const Navbar = () => {

  const handleOnclick = ()=>{
    console.log("handle on clicked");
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <MovieIcon style={{ fontSize: '3rem', color: '#FC4747' }} />
        </div>
        <div className={styles.navItems}>
          <Link to={'/'}><WindowIcon className={styles.icon}/></Link>
          <Link to={'/movies'}><LocalMoviesIcon className={styles.icon}/></Link>
          <Link to={'/tvshows'}><LiveTvIcon className={styles.icon}  /></Link>
          <Link to={'/bookmark'}><BookmarkIcon className={styles.icon}  /></Link>

        </div>
        <div className={styles.avatar}>
          <AccountCircleRoundedIcon className={styles.icon} onClick={handleOnclick} />
        </div>
      </div>



    </>
  )
}

export default Navbar
