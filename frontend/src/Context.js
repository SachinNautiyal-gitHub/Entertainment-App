
import React, { useState, createContext, useEffect } from "react";
// import JsonData from './data.js';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
    
    const [array, setArray] = useState([]);
    const [bookmarks, setbookmarks] = useState([]);
    
    const API = "http://localhost:5000/api"

    const fetchData = async () => {
        
        const data = await fetch(`${API}/data/moviesdata`)
        // ,{
        //     method:"GET",
        //     headers:{
        //         "Content-Type" : "application-json",
        //         "auth-token": localStorage.getItem('token')
        //     }
        // })

       const res = await data.json();
       console.log(res);
       setArray(res);

    };



    useEffect(() => {
        fetchData();
    }, []);

    return <AppContext.Provider value={{array, setArray}}>
        { children }
    </AppContext.Provider>
}



export { AppContext, AppProvider };