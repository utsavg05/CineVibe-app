import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ name, schedule, img }) => {
  const isLoggedIn = false;
  const navigate = useNavigate();

  const handleBooking = () => {
    if (isLoggedIn) navigate("/events/details");
    else alert("Please log in to purchase ticket!");
  };

  return (
    <div className="p-4 mt-10 w-full max-w-[400px] md:max-w-[700px] mx-auto flex flex-col items-center bg-white shadow-xl rounded-lg">
      {/* Event Image */}
      <img className="w-full h-auto rounded-lg" src={img} alt={name} />

      {/* Event Details */}
      <div className="flex flex-col sm:flex-row justify-between w-full mt-3 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl font-semibold truncate">{name}</h1>
        <h1 className="text-sm sm:text-lg italic text-gray-600">{schedule}</h1>
      </div>

      {/* Buy Ticket Button */}
      <button
        className="w-full sm:w-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-semibold px-6 py-2 rounded-lg cursor-pointer mt-3 hover:opacity-90 transition-all"
        onClick={handleBooking}
      >
        Buy a Ticket
      </button>
    </div>
  );
};

export default EventCard;

