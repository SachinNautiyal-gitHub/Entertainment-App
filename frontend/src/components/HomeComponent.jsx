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

<iframe width="560" height="315" src="https://www.imdb.com/video/vi2789522457/?ref_=ext_shr_lnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default HomeComponent
