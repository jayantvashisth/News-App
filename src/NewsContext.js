import React, { createContext, useEffect, useState } from "react";
import axios from "axios";


export const NewsContext = createContext();

export const NewsContextProvider = (props)=>{
    const [data, setdata] = useState()
    const apiKey = "432cdabc48bb47788b8359da1cc08015"

    useEffect(() => {
        
      axios.get(
        `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`
      ).then((res)=>{
        setdata(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    
    }, [data])
    

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}