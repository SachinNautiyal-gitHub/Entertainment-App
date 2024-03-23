
import React, { useState, createContext, useEffect } from "react";
// import JsonData from './data.js';

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
    
    //creating required state for the app  here
    const [array, setArray] = useState([]); 
    const [bookmark, setBookmark] = useState([]);
    const [query, setQuery] = useState("");
    
    const port = "https://entertainment-server-i9z7.onrender.com" //server url

    const fetchData = async () => {       // this function will get all the data from database.
        const data = await fetch(`${port}/api/data/moviesdata`
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


    const bookmarkData = async() =>{  // this function will get all the bookmark data of specific user from the server.
        const data = await fetch(`${port}/api/data/bookmark`,
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


    const addBookMark = async (id)=>{ // addbookmark function to add a bookmark
        const data = await fetch(`${port}/api/data/add/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token": localStorage.getItem('token')
 
             }
        });

        const res = await data.json();
        console.log(res);
       

    }

    const removeBookMark = async(id)=>{  // logic for removing the bookmark
         const data = await fetch(`${port}/api/data/remove/${id}`,{

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