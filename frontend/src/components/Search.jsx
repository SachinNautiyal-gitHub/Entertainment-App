import React from 'react'
import styles from './Styles/search.module.css'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
   <>
   
   <div className={styles.search}>
     <SearchIcon className={styles.icon}/>
     <input type="text"  placeholder='Search for movies or TV series' />
   </div>
     
   </>
  )
}

export default Search
