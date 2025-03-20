import React from "react";
import { useNavigate } from "react-router-dom";

const ShowsCard = ({ img, location, name, price }) => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleBooking = () => {
    if (isLoggedIn) navigate("/shows/details");
    else alert("Please log in to purchase ticket!");
  };

  return (
    <div className="w-full max-w-[350px] bg-white rounded-lg shadow-xl flex flex-col p-4 mx-auto">
      {/* Show Image */}
      <img className="w-full h-56 object-centre rounded-lg" src={img} alt={name} />

      {/* Show Details */}
      <div className="flex flex-col gap-1 mt-2 text-center sm:text-left">
        <h1 className="text-xl font-semibold text-black">{name}</h1>
        <h2 className="text-md text-gray-700">{location}</h2>
        <h2 className="text-md text-gray-700 font-semibold">{price}</h2>
      </div>

      {/* Booking Button */}
      <button
        className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-6 py-3 rounded-lg cursor-pointer mt-4 hover:opacity-90 transition-all"
        onClick={handleBooking}
      >
        Book
      </button>
    </div>
  );
};

export default ShowsCard;

