import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import defaultBcg from '../images/room-4.jpg';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';
import {
  FaBed,
  FaDollarSign,
  FaMale,
  FaPaw,
  FaRegClock,
  FaUtensils,
} from 'react-icons/fa';

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: this.props.match.params.roomId,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.roomId);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room can be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }

    return (
      <>
        <StyledHero img={room.images[0] || this.state.defaultBcg}>
          <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {room.images.map((item, i) => (
              <img key={i} src={item} alt={room.name} />
            ))}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <h6>
                <span className="info-icon">
                  <FaDollarSign />
                </span>
                Price: ${room.price} per night
              </h6>
              <h6>
                <span className="info-icon">
                  <FaRegClock />
                </span>
                Check-in: {room.checkIn.toFixed(2)}{' '}
                <span className="lowercase">pm</span>
              </h6>
              <h6>
                <span className="info-icon">
                  <FaRegClock />
                </span>
                Check-out: {room.checkOut.toFixed(2)}{' '}
                <span className="lowercase">pm</span>
              </h6>
            </article>

            <article className="info">
              <h3>Room info</h3>
              <h6>
                <span className="info-icon">
                  <FaBed />
                </span>
                Size: {room.size} SQFT
              </h6>
              <h6>
                <span className="info-icon">
                  <FaMale />
                </span>
                Max Capacity:
                {room.capacity > 1
                  ? ` ${room.capacity} people`
                  : ` ${room.capacity} person`}
              </h6>
              <h6>
                <span className="info-icon">
                  <FaPaw />
                </span>
                {room.pets ? 'pets allowed' : 'no pets allowed'}
              </h6>
              {room.breakfast && (
                <h6>
                  <span className="info-icon">
                    <FaUtensils />
                  </span>
                  Free breakfast
                </h6>
              )}
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h5>Extras</h5>
          <ul className="extras">
            {room.extras.map((item, i) => (
              <li key={i} className="extras-list">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
