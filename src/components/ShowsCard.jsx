import React from 'react'
import { useNavigate } from 'react-router-dom'

const ShowsCard = ({img, location, name, price}) => {
  const isLoggedIn = false
  const navigate = useNavigate()
  const handleBooking = () => {
    if(isLoggedIn)
      navigate("/shows/details")
    else 
    alert("Please log in to purchase ticket!")
  }
  return (
    <div className='w-[300px] max-h-[580px] overflow-hidden bg-white rounded-lg shadow-xl flex flex-col p-2.5'>
        <img className='w-full h-[73%]' src={img} alt="" />
        <h1 className='mt-1 text-xl font-semibold font-sans text-black'>{name}</h1>
        <h2 className='text-md text-gray-700 font-sans'>{location}</h2>
        <h2 className='text-md text-gray-700 font-sans'>{price}</h2>
      <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-4 py-3 rounded-lg cursor-pointer my-3'
      onClick={handleBooking}
      >Book</button>

      
    </div>
  )
}

export default ShowsCard
