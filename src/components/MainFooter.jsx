import React from 'react';
import logoImg from '../images/Coast.jpg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const MainFooter = () => {
  return (
    <div className="main-footer">
      <div className="footer-links">
        <div className="footer-contact">
          <h1 className="footer-headtext">Contact</h1>
          <p>ABCDEXYZ, Victoria</p>
          <p>0000</p>
          <p>(01) 2345 6789</p>
        </div>
        <div className="footer-logo">
          <img src={logoImg} alt="hotel logo" />
          <div className="footer-icon">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer-work">
          <h1 className="footer-headtext">Working Hours</h1>
          <p>Monday - Friday</p>
          <p>8:00 am - 12:00 am</p>
          <p>Saturday - Sunday</p>
          <p>9:00 am - 11:00 pm</p>
        </div>
      </div>
      <div className="footer-copyright flex-center">
        <p>2022 &copy; COAST. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default MainFooter;
