import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className='Hero container'>
      <div className='Hero-text'>
        <h1>A vast world awaits you for being explored</h1>
        <p>Traveling it leaves you speechless, then turns you into a storyteller</p>
        <a href="/About" className="btn">Explore more</a>
      </div>
    </div>
  );
}

export default Hero;
