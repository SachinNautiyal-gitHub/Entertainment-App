
import React, { useState, createContext, useEffect } from "react";

const AppContext = createContext([]);



const AppProvider = ({ children }) => {


    const [array, setArray] = useState([]);
    const [bookmarks, setbookmarks] = useState([]);


    const fetchData = async () => {
        
        console.log("useEffect called");

    };



    useEffect(() => {
       fetchData();
    }, []);

    return <AppContext.Provider value={{array, setArray}}>
        { children }
    </AppContext.Provider>
}



export { AppContext, AppProvider };