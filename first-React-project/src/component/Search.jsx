import React, { useContext } from 'react'
import { GlobalData } from './createcontext'

const Search = () => {
  const{search,setsearch,error} = useContext(GlobalData)
  return (
    <div className='flex justify-center flex-col gap-2'>
      <h1 className='text-center mt-5 font-bold text-xl text-capitalize text-zinc-400'>Search Movies</h1>

      <input  className='w-60 m-auto font-xl pl-3 bg-white-400 border-none py-2 pr-5 rounded font-serif bg-white-500 shadow-xl my-4 'type="text"
             value={search}
             onChange={(e)=>setsearch(e.target.value)} 
             placeholder='Search'
             />
        <div className="error">
            {
              // <p className='text-center text-red-800'>{error.show && error.msg}</p>
            }

        </div>

         



    </div>
  )
}

export default Search