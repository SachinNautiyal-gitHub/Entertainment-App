import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import styles from './Styles/notfound.module.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.Notfound}>
       <SentimentVeryDissatisfiedIcon className={styles.icon}/>
       <h1>404 : Not Found</h1>
       <p>Sorry, the page you are looking for does not exits, go to <Link to={'/'}>home</Link>.</p>
    </div>
  )
}

export default NotFound
