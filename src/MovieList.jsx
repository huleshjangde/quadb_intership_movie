import React  from 'react';
import { useContext } from 'react'
import { ApiContext } from './usecontext/usecontext'


const MovieList = () => {
    const shows = useContext(ApiContext);
    console.log(shows);
  return (
    <>
    <div className='w-screen h-screen p-20'>
        <div className="container">
            {
           
            }
        </div>
    </div>
    </>
  )
}

export default MovieList