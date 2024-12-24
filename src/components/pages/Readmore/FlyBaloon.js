import React, { useState, useEffect } from 'react';
import './WeOfferCars.css';

function FlyBaloon() {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    pickupLocation: '',
    returnLocation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Car Booking Details:
      Start Date: ${formData.startDate}
      End Date: ${formData.endDate}
      Pickup: ${formData.pickupLocation}
      Returning To: ${formData.returnLocation}`);
  };

  useEffect(() => {
    const contactForm = document.getElementById('contactForm');

    const handleContactSubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      console.log('Contact Form Submitted:', { name, email, message });
      alert('Thank you for your message. We will get back to you soon!');
      contactForm.reset();
    };

    contactForm.addEventListener('submit', handleContactSubmit);

    return () => {
      contactForm.removeEventListener('submit', handleContactSubmit);
    };
  }, []);

  return (
    <div className="we-offer-container">
  
      <header className="header">
        <h1 className="site-title">Car Rental</h1>
        {/* <nav>
          <ul>
            <li>Home</li>
            <li>Special Offers</li>
            <li>Cars</li>
            <li>Locations</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav> */}
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="booking-section">
          <h2>RENT A CAR</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Rental Start Date/Time:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Rental End Date/Time:
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Pickup Location:
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="Enter Pickup Location"
                required
              />
            </label>
            <label>
              Returning To:
              <input
                type="text"
                name="returnLocation"
                value={formData.returnLocation}
                onChange={handleChange}
                placeholder="Enter Return Location"
                required
              />
            </label>
            <button type="submit" className="get-quote-btn">
              Send
            </button>
          </form>
        </div>

        <div className="hero-section">
          <h2>For More Info</h2>
          <p>
            "The course is neither before nor after the opposite consequence. Move right or left, 
            not stuck in one place. Gravitas was situated near where the condiments stood."
          </p>
        </div>
      </div>

      {/* Footer with Contact Form */}
      <footer className="footer">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form id="contactForm">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className='joo'>
          <h3>3 Great Reasons to Book Our Car Hire</h3>
          <ul>
            <li>More than 2 years' experience</li>
            <li>More than 100 pickup locations</li>
            <li>Competitive prices</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FlyBaloon;