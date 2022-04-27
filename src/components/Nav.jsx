import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHandler() {
    setIsOpen(prev => !prev);
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Hotel Logo" className="nav-logo" />
          </Link>
          <button type="button" className="nav-btn" onClick={toggleHandler}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
