import React, { useEffect, useState } from "react";

// Create a context
const GlobalData = React.createContext();

  const api = `http://www.omdbapi.com/?apikey=815080d3&`;

// Create a provider component
const ContextProvider = ({ children }) => {
    const [movie,setmovies] = useState([]);
    const [loading,setloading] = useState(true);
    const [error,seterror]  = useState({show:false,msg:""})
    const [search,setsearch] = useState("Fight");

    const getMovies =  async (url) =>{
       
        try{
            const response = await fetch(url);
            const data =  await response.json();
            console.log(data);
            if(data.Response === "True"){
                setmovies(data.Search)
                seterror({show:false,msg:""})

                setloading(false)

            }
            else{
                seterror({show:true,msg:data.Error});
                setmovies([])
                setloading(true);

            }
        }
        catch(error){
            console.log(error);
        }

    }
    



    useEffect(()=>{
     let timeout =   setTimeout(() => {
        getMovies( `${api}&s=${search}`);

      }, 500);

      return()=> clearTimeout(timeout);
 
    },[search])




  return (
    <GlobalData.Provider value={{movie,loading,error,search,setsearch}}>
      {children}
    </GlobalData.Provider>
  );
};

export { GlobalData, ContextProvider };
