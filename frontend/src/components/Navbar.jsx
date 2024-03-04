import React from 'react'
import styles from './Styles/navbar.module.css'
import MovieIcon from '@mui/icons-material/Movie';
import WindowIcon from '@mui/icons-material/Window';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <MovieIcon style={{ fontSize: '3rem', color: '#FC4747' }} />
        </div>
        <div className={styles.navItems}>
          <WindowIcon className={styles.icon} />
          <LocalMoviesIcon className={styles.icon}  />
          <LiveTvIcon className={styles.icon}  />
          <BookmarkIcon className={styles.icon}  />

        </div>
        <div className={styles.avatar}>
          <AccountCircleRoundedIcon className={styles.icon} />
        </div>
      </div>



    </>
  )
}

export default Navbar
