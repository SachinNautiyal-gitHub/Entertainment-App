import React, { useContext } from 'react'
import { AppContext } from '../Context'
import styles from './Styles/homecompo.module.css'

const HomeComponent = () => {

    const { array } = useContext(AppContext);
    console.log(array);


    return (
        <div className={styles.container}>
            {array && array.map((item) => {
                return (
                    <div className={styles.itemcontainer}>

                        <li style={{color:'white'}}>{item.Title}</li>
                        <img src={item.Poster} alt="" />
                        <li style={{color:'white'}}>{item.Type}</li>
                    </div>
                )
            })
            }
        </div>
    )
}

export default HomeComponent
