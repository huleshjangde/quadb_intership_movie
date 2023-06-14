import React from 'react'
import { useContext,useState } from 'react'
import { ApiContext } from '../usecontext/usecontext'
import { Link } from 'react-router-dom'

const MovieCard = () => {
  const [searchQuery, setSearchQuery] = useState('');
    const shows = useContext(ApiContext);

    const filteredShows = shows.filter((show) =>
  show.show.name.toLowerCase().includes(searchQuery.toLowerCase())
);
console.log(filteredShows);

  return (
    <>
    <div className='w-screen md:w-full flex flex-col  items-center text-center  h-screen '>
    <div className='search-bar mb-1 mt-2 w-96 '>
    <input
      type='text'
      placeholder='Search...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none ${filteredShows.length === 0 && searchQuery.length > 0 ? 'bg-red-200' : ''}`}
    />
  </div>

   <div className="show-list p-5  md:p-10 flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-start">

   {searchQuery.length  > 0 && filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <div className="show-card w-screen  md:w-80 h-fit md:h-auto flex flex-col justify-center items-center gap-3 md:p-4 border border-slate-400 shadow-xl md:rounded-md hover:scale-105 py-5 px-5  md:py-10 "        key={show.show.id}>
              <img src={show.show.image.medium} alt={show.show.name} className="show-image w-4/5 md:w-4/5 h-auto rounded-md shadow-lg" />
    
              <div className="show-details flex flex-col gap-2">
                <h2 className='md:text-xl text-2xl font-medium'>{show.show.name}</h2>
    
                <p className='text-base font-medium'>Category: {show.show.genres?.join(', ')}</p>
                <p  className='text-base font-medium'>Language: {show.show.language}</p>
                {/* <p className='line-clamp-3' dangerouslySetInnerHTML={{ __html: show.show.summary }}></p> */}
                <Link className='bg-blue-500 text-white text-base hover:bg-blue-700 font-medium py-2 px-4 rounded-lg' to={`/summary/${show.show.id}`}>
                    View Summary
                  </Link>
              </div>
            </div>
            ))
          ) : 

       shows.map(show => (
        <div className="show-card w-screen  md:w-80 h-fit md:h-auto flex flex-col justify-center items-center gap-3 md:p-4 border border-slate-400 shadow-xl md:rounded-md hover:scale-105 py-5 px-5  md:py-10 "        key={show.show.id}>
          <img src={show.show.image?.medium} alt={show.show.name} className="show-image w-4/5 md:w-4/5 h-auto rounded-md shadow-lg" />

          <div className="show-details flex flex-col gap-2">
            <h2 className='md:text-xl text-2xl font-medium'>{show.show.name}</h2>

            <p className='text-base font-medium'>Category: {show.show.genres?.join(', ')}</p>
            <p  className='text-base font-medium'>Language: {show.show.language}</p>
            {/* <p className='line-clamp-3' dangerouslySetInnerHTML={{ __html: show.show.summary }}></p> */}
            <Link className='bg-blue-500 text-white text-base hover:bg-blue-700 font-medium py-2 px-4 rounded-lg' to={`/summary/${show.show.id}`}>
                View Summary
              </Link>
          </div>
        </div>
      ))
      
      }
    </div>
    </div>
    </>
  )
}

export default MovieCard