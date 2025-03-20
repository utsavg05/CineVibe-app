import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ img, genre, name }) => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleBooking = () => {
    if (isLoggedIn) navigate("/movies/bookings");
    else alert("Please log in to book a movie!");
  };

  return (
    <div className="w-full max-w-[350px] bg-white rounded-lg shadow-xl flex flex-col p-4 mx-auto">
      {/* Movie Image */}
      <img className="w-full h-64 object-center rounded-lg md:h-80" src={img} alt={name} />

      {/* Movie Details */}
      <div className="flex flex-col mt-2 text-center sm:text-left">
        <h1 className="text-xl font-semibold text-black">{name}</h1>
        <h2 className="text-md text-zinc-700 italic">{genre}</h2>
      </div>

      {/* Booking Button */}
      <button
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-6 py-3 rounded-lg cursor-pointer mt-4 hover:scale-105 transition-all"
        onClick={handleBooking}
      >
        Book
      </button>
    </div>
  );
};

export default MovieCard;


