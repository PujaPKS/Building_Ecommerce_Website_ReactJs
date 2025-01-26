import React from 'react';
import './Footer.css';  // Import the CSS file
import Spotify_Logo from '../../assets/Spotify_Logo.png'
import Facebook_Logo from '../../assets/Facebook_Logo.png'
import youTube from '../../assets/youTube.jpg'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <h1 className="footer-title">The Generics</h1>
      <div className="social-icons">
        <a href="#youtube">
          <img src={youTube} alt="YouTube" />
        </a>
        <a href="#spotify">
          <img src={Spotify_Logo} alt="Spotify" />
        </a>
        <a href="#facebook">
          <img src={Facebook_Logo} alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);
};

export default Footer;