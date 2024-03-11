
import React, { useState, createContext, useEffect } from "react";
import JsonData from './data.js';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {


    const [array, setArray] = useState([]);
    const [bookmarks, setbookmarks] = useState([]);


    const fetchData = async () => {
        
        console.log("useEffect called");

    };



    useEffect(() => {
        setArray(JsonData);
    }, []);

    return <AppContext.Provider value={{array, setArray}}>
        { children }
    </AppContext.Provider>
}



export { AppContext, AppProvider };