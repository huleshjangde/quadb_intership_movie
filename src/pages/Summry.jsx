import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiContext } from '../usecontext/usecontext';

const Summary = () => {
  const movies = useContext(ApiContext);
  const { id } = useParams();

  // Find the movie based on the id
  const movie = movies.find(movie => movie.show.id === parseInt(id));

  return (
    <div className='w-screen h-screen relative bg-slate-100'>
      {movie ? (
        <>
        <div className='w-screen h-screen flex  flex-col-reverse  lg:flex-row overflow-scroll py-3 px-8 lg:px-28 gap-5 items-center lg:py-20 md:w-full md:text-center lg:text-start justify-center'>
          <div className='flex flex-col gap-2 items-center lg:items-start md:text-center'>
          <h2 className='text-2xl md:text-3xl font-bold'>{movie.show.name}</h2>
          <div>
            <p className="time flex md:text-lg md:font-medium">
              {movie.show.schedule.time }  <span className='ml-3'>  {movie.show.schedule.days}  </span>
             
            </p>
            
          </div>
          <div className='flex gap-2 md:gap-3  lg:gap-5 font-semibold text-base lg:text-base md:text-xl'>
          <p>Category: {movie.show.genres?.join(', ')}</p>
          <p>Language: {movie.show.language}</p>
          </div>
          <p className='text-base md:text-lg font-medium border border-gray-400 py-1 px-3 md:p-2 shadow-lg'>Summary</p>
          <p className='text-base md:text-xl lg:text-base lg:text-left' dangerouslySetInnerHTML={{ __html: movie.show.summary }}></p>
          <Link to={`/bookshow/${movie.show.id}`} className='text-1xl lg:text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg w-full text-center py-2 px-4 lg:px-4 lg:py-1 sticky bottom-0  left-0  md:text-2xl md:p-4'>Book Ticket</Link>

          </div>
          


          <img src={movie.show.image?.medium} alt={movie.show.name}  className='w-4/5 h-auto lg:h-full md:h-auto md:w-4/5 lg:w-1/3 shadow-2xl rounded-2xl'/>
          
         
          
          </div>
        </>
        
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}

export default Summary;
