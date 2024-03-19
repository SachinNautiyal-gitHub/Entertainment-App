import React, { useContext } from 'react'
import styles from './Styles/search.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

const Search = () => {
  
  const {onchange} = useContext(AppContext);

   const navigate = useNavigate();
  const handleOnClick = () =>{
    navigate('/searchresult');
  }

  return (
   <>
   
   <div className={styles.search}>
     <SearchIcon className={styles.icon}/>
     <input type="text"  placeholder='What do you want to watch ?'  onClick={handleOnClick} onChange={(e)=>onchange(e)}/>
   </div>
     
   </>
  )
}

export default Search
