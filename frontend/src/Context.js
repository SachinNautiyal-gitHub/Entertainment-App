
import React, { useState, createContext, useEffect } from "react";
// import JsonData from './data.js';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
    
    const [array, setArray] = useState([]);
    const [bookmark, setBookmark] = useState([]);
    
    const API = "http://localhost:5000/api"

    const fetchData = async () => {      
        const data = await fetch(`${API}/data/moviesdata`
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
        const data = await fetch(`${API}/data/bookmark`,
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
        const data = await fetch(`${API}/data/add/${id}`,{
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
         const data = await fetch(`${API}/data/remove/${id}`,{

            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem('token')
 
             }
         });
         const res = await data.json();
         console.log(res);         
    }



    useEffect(() => {
        fetchData();
        bookmarkData();
    }, []);

    return <AppContext.Provider value={{array, setArray , fetchData, bookmark, bookmarkData, addBookMark , removeBookMark}}>
        { children }
    </AppContext.Provider>
}



export { AppContext, AppProvider };