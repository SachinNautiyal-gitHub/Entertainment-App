
import React, { useState, createContext, useEffect } from "react";
// import JsonData from './data.js';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
    
    const [array, setArray] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    const [query, setQuery] = useState("");
    
    const port = "https://entertainment-server-i9z7.onrender.com"

    const fetchData = async () => {      
        const data = await fetch(`${port}/data/moviesdata`
        ,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json",
                "auth-token": localStorage.getItem('token')
            }
        })

       const res = await data.json();
       console.log(res);
       setArray(res);

    };


    const bookmarkData = async() =>{
        const data = await fetch(`${port}/data/bookmark`,
        {
            method:"GET",
            headers:{
               "Content-Type":"application/json",
               "auth-token": localStorage.getItem('token')

            }
        })

        const res = await data.json();
        setBookmark(res);
    }


    const addBookMark = async (id)=>{
        const data = await fetch(`${port}/data/add/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem('token')
 
             }
        });

        const res = await data.json();
        console.log(res);
       

    }

    const removeBookMark = async(id)=>{
         const data = await fetch(`${port}/data/remove/${id}`,{

            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem('token')
 
             }
         });
         const res = await data.json();
         console.log(res);         
    }


    const onchange = (e) =>{
        setQuery(e.target.value);
    }



    useEffect(() => {
        fetchData();
        bookmarkData();
    }, [bookmark]);

    return <AppContext.Provider value={{array, setArray , fetchData, bookmark, bookmarkData, addBookMark ,query, removeBookMark, onchange}}>
        { children }
    </AppContext.Provider>
}



export { AppContext, AppProvider };