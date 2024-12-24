import React from 'react';
import './Contact.css';
import { FaUser, FaLock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="wrapperc">
      <div className="form-boxc login">
        <form action="">
          <h1>Contact Us</h1>

          {/* Username Input */}
          <div className="input-boxc">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          {/* Password Input */}
          <div className="input-boxc">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          {/* Message Input */}
          <div className="input-message">
            <textarea placeholder="Write your message..." required />
          </div>

          {/* Send Button */}
          <div className="btn">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
