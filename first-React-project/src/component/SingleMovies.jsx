import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SingleMovies = () => {
    const { id } = useParams()
    console.log(id);

    const api = `http://www.omdbapi.com/?apikey=815080d3&`;

    const [movie,setmovies] = useState([]);
    const [loading,setloading] = useState(true);

    const getMovies =  async (url) =>{
       
        try{
            const response = await fetch(url);
            const data =  await response.json();
            if(data.Response === "True"){
                console.log(data);
                setmovies(data)
                setloading(false)
            }
            else
            {
                seterror({show:true,msg:data.Error})
            }
        }
        catch(error){
            console.log(error)
        }

    }
    



    useEffect(()=>{
     let timeout =   setTimeout(() => {
        getMovies( `${api}&i=${id}`);

      }, 400);

      return()=> clearTimeout(timeout);
 
    },[id])









    
    
    return (
        <>
           <div className='w-full min-h-screen bg-slate-800 flex justify-center items-center text-white text-4xl'>
  {loading ? (
    <p>Loading...</p>
  ) : (
    <div className="card w-full md:w-3/4 lg:w-1/2 h-auto bg-white rounded-md flex flex-col md:flex-row gap-4 sm:overflow-hidden text-center" >
      <img className='w-full md:w-1/2 h-auto md:h-full object-cover' src={movie.Poster} alt="#" />

      <div className="w-full md:w-1/2 text-black text-xl pt-2 flex flex-col justify-center ">
        <p className={`font-sans font-bold text-2xl text-center pt-5 ${movie.Title.length > 15 ? 'truncate' : ''}`}>{movie.Title}</p>
        <p className='py-2 text-zinc-600 font-semibold'>{movie.Released}</p>
        <p className='py-2 text-zinc-600 font-semibold text-center'>{movie.Actors}</p>
        <p className='py-2 text-zinc-600 font-semibold'>{movie.Genre}</p>
        <p className='py-2 text-zinc-600 font-semibold'>IMDb Rating: {movie.imdbRating}</p>

        <Link to='/'>
          <button className='my-4 p-4 bg-slate-800 text-white font-bold transition ease-out hover:bg-slate-600 rounded-lg border-none w-full md:w-auto'>Go Back</button>
        </Link>
      </div>
    </div>
  )}
</div>

        </>
    );
};

export default SingleMovies;
