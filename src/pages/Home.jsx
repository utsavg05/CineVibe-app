import { Link } from "react-router-dom";

function Home() {
    return (
        
      <div className="text-center p-10 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold text-purple-700">Welcome to CineVibe</h1>
        <p className="mt-4 text-lg text-gray-700">Explore the latest movies, shows, and events.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-600">Latest Movies</h2>
            <p className="mt-2 text-gray-600">Check out the latest blockbusters and indie films.</p>
            <button to="/movies" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore Movies</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-600">Upcoming Shows</h2>
            <p className="mt-2 text-gray-600">Don't miss out on the most anticipated shows.</p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Explore Shows</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-600">Events Near You</h2>
            <p className="mt-2 text-gray-600">Find exciting events happening in your area.</p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Explore Events</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-600">Special Screenings</h2>
            <p className="mt-2 text-gray-600">Experience exclusive screenings and premieres.</p>
            <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Explore Screenings</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-indigo-600">Film Festivals</h2>
            <p className="mt-2 text-gray-600">Join the best film festivals around the world.</p>
            <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Explore Festivals</button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-600">Community Events</h2>
            <p className="mt-2 text-gray-600">Participate in local community events and activities.</p>
            <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">Explore Community</button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home;
  