import React from 'react'

const EventCard = ({name, schedule, img}) => {
  return (
    <div className='p-3.5 mt-20 w-[80%] mx-auto flex flex-col items-center justify-center bg-white shadow-xl rounded-lg'>
      <img className='w-full max-h-[80%]' src={img} alt="" />
      <div className='flex justify-between w-full mt-2'>
        <h1 className='text-xl font-sans font-semibold'>{name}</h1>
        <h1 className='text-lg font-sans italic'>{schedule}</h1>
      </div>
      <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-12 py-3 rounded-lg cursor-pointer mt-3'>Buy a ticket</button>
    </div>
  )
}

export default EventCard
