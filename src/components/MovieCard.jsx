import React from 'react'
import { useNavigate } from "react-router-dom"


const MovieCard = ({ img, genre, name }) => {
  const isLoggedIn = false
  const navigate = useNavigate()
  const handleBooking = () => {
    if(isLoggedIn)
      navigate("/movies/bookings")
    else 
    alert("Please log in to book a movie!")
  }
  return (
    <div className='w-[300px] max-h-[580px] overflow-hidden bg-white rounded-lg shadow-xl flex flex-col p-2.5'>
      <img className='w-full h-[76%]' src={img} alt="" />
      <h1 className='mt-1 text-xl font-semibold font-sans text-black'>{name}</h1>
      <h2 className='text-md text-zinc-700 font-sans italic'>{genre}</h2>
      <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-4 py-3 rounded-lg cursor-pointer my-3'
      onClick={handleBooking}
      >Book</button>


    </div>
  )
}

export default MovieCard
