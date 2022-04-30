import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/room-6.jpeg';
import Title from './Title';

const Card = () => {
  return (
    <>
      <Title title="offers " />
      <div className="card">
        <img src={img} alt="Room view" />
        <div className="card-body">
          <h4 className="card-title">Get bonus points per stay!</h4>
          <p className="card-sub">
            Available: February 25, 2022 — August 15, 2022
          </p>
          <p className="card-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            autem repellat, eius error velit soluta deleniti voluptas atque id
            tempore.
          </p>
        </div>

        <Link to="/rooms" className="btn-primary card-btn">
          View more rooms
        </Link>
      </div>
    </>
  );
};

export default Card;
