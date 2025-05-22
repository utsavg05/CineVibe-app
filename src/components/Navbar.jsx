import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Cine<span className="text-yellow-300 text-5xl md:text-6xl">Vibe</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <NavLink
            exact
            to="/"
            className="text-white font-semibold text-xl cursor-pointer hover:text-yellow-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="text-white font-semibold text-xl cursor-pointer hover:text-yellow-300"
          >
            Movies
          </NavLink>
          <NavLink
            to="/events"
            className="text-white font-semibold text-xl cursor-pointer hover:text-yellow-300"
          >
            Events
          </NavLink>
          <NavLink
            to="/shows"
            className="text-white font-semibold text-xl cursor-pointer hover:text-yellow-300"
          >
            Plays
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-3xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-opacity-90 flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </button>
        <NavLink
          to="/"
          className="text-white text-2xl font-semibold hover:text-yellow-300"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className="text-white text-2xl font-semibold hover:text-yellow-300"
          onClick={() => setMenuOpen(false)}
        >
          Movies
        </NavLink>
        <NavLink
          to="/events"
          className="text-white text-2xl font-semibold hover:text-yellow-300"
          onClick={() => setMenuOpen(false)}
        >
          Events
        </NavLink>
        <NavLink
          to="/shows"
          className="text-white text-2xl font-semibold hover:text-yellow-300"
          onClick={() => setMenuOpen(false)}
        >
          Plays
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
