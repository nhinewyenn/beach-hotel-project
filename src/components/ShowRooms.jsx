import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types';
import defaultImg from '../images/room-10.jpg.webp';

const ShowRooms = ({ room }) => {
  return (
    <Fade>
      <article className="room">
        <div className="img-container">
          <img src={room.images[0] || defaultImg} alt="featured rooms" />
          <div className="price-top">
            <h6>${room.price}</h6>
            <p>Per night</p>
          </div>
          <Link to={`/rooms/${room.slug}`} className="btn-primary room-link">
            Features
          </Link>
        </div>
        <p className="room-info">{room.name}</p>
      </article>
    </Fade>
  );
};

ShowRooms.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ShowRooms;
