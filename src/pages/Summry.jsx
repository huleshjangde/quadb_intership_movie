import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiContext } from '../usecontext/usecontext';

const Summary = () => {
  const movies = useContext(ApiContext);
  const { id } = useParams();

  // Find the movie based on the id
  const movie = movies.find(movie => movie.show.id === parseInt(id));

  return (
    <div className='w-screen h-screen relative'>
      {movie ? (
        <>
        <div className='w-screen h-screen flex  flex-col-reverse md:flex-row overflow-scroll py-8 px-8 md:px-28 gap-5 items-center md:py-20 '>
          <div className='flex flex-col gap-5 items-center md:items-start'>
          <h2 className='text-2xl font-bold'>{movie.show.name}</h2>
          <div>
            <p className="time flex">
              {movie.show.schedule.time }  <span className='ml-3'>  {movie.show.schedule.days}  </span>
             
            </p>
            
          </div>
          <div className='flex gap-2  md:gap-5 font-semibold text-base'>
          <p>Category: {movie.show.genres?.join(', ')}</p>
          <p>Language: {movie.show.language}</p>
          </div>
          <p className='text-base' dangerouslySetInnerHTML={{ __html: movie.show.summary }}></p>
          <Link to={`/bookshow/${movie.show.id}`} className='text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg w-full text-center py-1 px-4 sticky bottom-0'>Book Ticket</Link>

          </div>
          


          <img src={movie.show.image?.medium} alt={movie.show.name}  className='w-full h-full md:w-1/3 shadow-2xl rounded-2xl'/>
          
         
          
          </div>
        </>
        
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default Summary;
