import React, { useContext } from 'react'
import { AppContext } from '../Context'

const HomeComponent = () => {

    const { array } = useContext(AppContext);
    console.log(array);  


    // const array = [
    //     {
    //         title: "The Galactic Odyssey",
    //         genre: "Sci-Fi",
    //         releaseYear: 2023,
    //         director: "Alex Stellar",
    //         actors: ["Emma Nebula", "Ryan Quasar", "Chris Nova"],
    //         rating: 4.5,
    //         duration: 150, // in minutes
    //     },
    //     {
    //         title: "Mystical Enchantment",
    //         genre: "Fantasy",
    //         releaseYear: 2022,
    //         director: "Elena Enigma",
    //         actors: ["Lucas Magicus", "Sophie Enchantress", "Olivia Mystique"],
    //         rating: 4.2,
    //         duration: 120, // in minutes
    //     },
    //     {
    //         title: "Infinite Connections",
    //         genre: "Drama",
    //         releaseYear: 2024,
    //         director: "James Nexus",
    //         actors: ["Ava Link", "Liam Networker", "Grace Interface"],
    //         rating: 4.8,
    //         duration: 135, // in minutes
    //     },

    // ]




    return (
        <div>
            { Object.keys(array).map((item) => {
                    return <li style={{ color: 'white' }}>{item}</li>
                })
            }


        </div>
    )
}

export default HomeComponent
