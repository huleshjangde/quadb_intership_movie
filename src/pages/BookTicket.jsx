import React, { useState,useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { ApiContext } from '../usecontext/usecontext';


const BookTicket = () => {
  const navigate = useNavigate();

    const movies = useContext(ApiContext);
const {id} = useParams();
const movie = movies.find(movie => movie.show.id === parseInt(id));

const [selectedOption, setSelectedOption] = useState(' ');
  
  const [userData, setUserData] = useState({
    name: '',
    mobile: '',
    MovieId: '',
    seatType: ''

    // Add other user details here
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,MovieId: movie.show.id, seatType:selectedOption
    }));
  };


   

 

    //data save on local storage

    console.log(localStorage.getItem('userData'));

    const saveUserDataToLocal = (data) => {
        const existingData = localStorage.getItem('userData');
        let newData = [];
        if (existingData) {
          newData = JSON.parse(existingData);
        }
        newData.push(data);
        localStorage.setItem('userData', JSON.stringify(newData));
        setUserData({
          name: '',
          mobile: '',
          MovieId: '',
          seatType: ''
        });

        toast.success('Ticket booked successfully!');
        setTimeout(()=>{
          navigate('/')
        },2000)
        
      };


  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserDataToLocal(userData);
    console.log(userData);
  };

  



  if (!movie) {
    // Movie not found, display an error message or redirect to a 404 page
    return <div>Error: Movie not found</div>;
  }

  return (

    
    <>
    <ToastContainer />
       
       <div className=' w-screen h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className=' w-full md:w-full lg:w-1/2  border h-full md:h-full py-5 rounded-xl bg-slate-100 flex flex-col gap-3 justify-center items-center'>
      <h2 className='text-2xl font-bold'>{movie.show.name}</h2>
      <img src={movie.show.image?.medium} alt={movie.show.name}  className='w-4/5 h-auto lg:w-1/3 shadow-2xl rounded-2xl'/>

      <p className="time flex text-2xl font-bold">
              {movie.show.schedule.time }  <span className='ml-3'>  {movie.show.schedule.days}  </span>
             
            </p>
            <div className='flex gap-2  md:gap-5 font-semibold text-base'>
          <p>Category: {movie.show.genres?.join(', ')}</p>
          <p>Language: {movie.show.language}</p>
          </div>

          <div className='w-4/5 md:1/2 md:flex md:justify-center '>
           
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Enter Name'
              value={userData.name}
              onChange={handleChange}
              className='md:w-1/2 w-full border border-gray-300 rounded p-3 mt-2 text-sm text-gray-900 outline-blue-400'
            />
          </div>
          <div className='w-4/5 md:1/2 md:flex md:justify-center '>
           
            <input
              type='text'
              id='mobile'
              name='mobile'
              placeholder='Enter Mobile Number'
              value={userData.mobile}
              onChange={handleChange}
              className='md:w-1/2 w-full border border-gray-300 rounded p-3 mt-2 text-sm text-gray-900 outline-blue-400'
            />
          </div>
          
          {/* ///kkkk */}


          <div className='flex  w-4/5 md:w-auto justify-between md:justify-normal md:gap-5 text-base font-medium'>
            <p>Seat type: </p>
      {['Standard', 'Premium', 'VIP'].map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
          />
          {option}
        </label>
      ))}
     
    </div>
          {/* Add other user details form fields here */}

          <button
            type='submit'
            className='w-4/5 md:w-2/5  mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          >
            Book Ticket
          </button>
        </form>
        </div>
    </>
  );
};

export default BookTicket;
