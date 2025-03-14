import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
return (
    <div className='sticky top-0 flex w-full h-22 px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 justify-between items-center shadow-lg'>
        <h1 className='text-white text-5xl font-semibold'>Cine<span className='text-yellow-300 text-6xl'>Vibe</span></h1>
            <div className='flex gap-8 mr-12'>
                    <NavLink exact to="/" activeClassName="underline text-yellow-300" className='text-white font-semibold text-2xl cursor-pointer hover:text-yellow-300'>Home</NavLink>
                    <NavLink to="/movies" activeClassName="underline text-yellow-300" className='text-white font-semibold text-2xl cursor-pointer hover:text-yellow-300'>Movies</NavLink>
                    <NavLink to="/events" activeClassName="underline text-yellow-300" className='text-white font-semibold text-2xl cursor-pointer hover:text-yellow-300'>Events</NavLink>
                    <NavLink to="/shows" activeClassName="underline text-yellow-300" className='text-white font-semibold text-2xl cursor-pointer hover:text-yellow-300'>Plays</NavLink>
            </div>
    </div>
)
}

export default Navbar
