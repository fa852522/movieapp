import React, { useContext } from 'react';
import { GlobalData } from './createcontext';
import { Link } from 'react-router-dom';

const Movies = () => {
  const { movie, loading, error} = useContext(GlobalData);

  return (
    <>
      {loading ? (
        <p className='w-full h-screen flex justify-center items-center text-4xl capitalize font-bold text-zinc-900'>{error.msg}</p>
      ) : (
        <div className='w-full justify-center'>
          <div className="boxs flex flex-wrap justify-start m-auto gap-4 mt-2 w-4/5  ">
            {movie.map((val, k) => (
              <Link to={`movie/${val.imdbID}`} key={k}>
                {console.log(val.imdbID)}
                <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 p-4 transition duration-300 ease-in-out hover:bg-gray-200 transform hover:scale-105">
                  <img className='h-48 w-48 object-cover mx-auto transform transition duration-300 ease-in-out hover:scale-105' src={val.Poster} alt="#" />
                  <div className="p-4">
                    <h1 className={`text-xl font-semibold ${val.Title.length > 10 ? 'truncate' : ''}`}>
                      {val.Title}
                    </h1>
                    <p className="text-gray-600">{val.Year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
