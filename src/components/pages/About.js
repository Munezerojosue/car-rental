import React, { useState, useEffect } from 'react';
import './About.css';
import imges1 from '../../Images/toyota.jpg';
import imges2 from '../../Images/benz.jpg';
import imges3 from '../../Images/hundai.jpg';
import imges6 from '../../Images/rava4.jpg';
import imges7 from '../../Images/benz.jpg';
import imges8 from '../../Images/4runner.jpg';
import imges9 from '../../Images/carmy.jpg';
import imges10 from '../../Images/safari2.jpg';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
   
    <>
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
       
        <div className="card-container fade-in">
          
          <div className="card">
            <img src={imges1} alt="Cars" />
            <h2>TOYOTA</h2>
            <a href="./WeOfferCars" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges2} alt="Discovering Places" />
            <h2>BENZ</h2>
            <a href="/DiscoverNewPlace" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges6} alt="Hotel Booking" />
            <h2>HUNDAI</h2>
            <a href="/HotelBooking" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges3} alt="Hotel Booking" />
            <h2>RAVA4</h2>
            <a href="/HotelBk" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges10} alt="Balloon Ride" />
            <h2>SAFARI TOUR </h2>
            <a href="/FlyBaloon" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges9} alt="Room Booking" />
            <h2>4 RUNNER</h2>
            <a href="/RoomBooking" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges8} alt="Hiking" />
            <h2>CARMY</h2>
            <a href="/Hiking" className="btn">Book Now</a>
          </div>
          <div className="card">
            <img src={imges7} alt="Hotel Reservation" />
            <h2>BENZ COMPRESSOR</h2>
            <a href="/HotelReservation" className="btn">Book Now</a>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
