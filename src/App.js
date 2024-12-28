import React from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'

import About from './components/pages/About'
import Home from './components/pages/Home'
import User from './components/pages/User'
import Register from './components/Register'
import Post from './components/pages/Post'
import Contact from './components/pages/Contact'
import WeOfferCars from './components/pages/Readmore/WeOfferCars'
import DiscoverNewPlace from './components/pages/Readmore/DiscoverNewPlace'
import HotelBooking from './components/pages/Readmore/HotelBooking'
import { Route, Routes, Navigate } from 'react-router-dom'  // Import Navigate for redirection

import HotelBk from './components/pages/Readmore/HotelBk'
import FlyBaloon from './components/pages/Readmore/FlyBaloon'
import Prius from './components/pages/Readmore/Prius'
import Hiking from './components/pages/Readmore/Hiking'
import HotelReservation from './components/pages/Readmore/HotelReservation'
import RoomBooking from './components/pages/Readmore/RoomBooking'

function App() {
  return (
    <div className='jo'>
      <Navbar />

      <Routes>
        {/* Redirect to Home when accessing the root path */}
        <Route path="/" element={<Navigate to="/Home" />} />  {/* Default redirect to Home */}

        <Route path='/Home' element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/User" element={<User />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/WeOfferCars" element={<WeOfferCars />} />
        <Route path="/DiscoverNewPlace" element={<DiscoverNewPlace />} />
        <Route path="/HotelBooking" element={<HotelBooking />} />
        <Route path="/HotelBk" element={<HotelBk />} />
        <Route path="/Flybaloon" element={<FlyBaloon />} />
        <Route path="/Prius" element={<Prius />} />
        <Route path="/Hiking" element={<Hiking />} />
        <Route path="/HotelReservation" element={<HotelReservation />} />
        <Route path="/RoomBooking" element={<RoomBooking />} />
      </Routes>
    </div>
  )
}

export default App
