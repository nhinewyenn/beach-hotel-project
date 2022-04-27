import React, { Component } from 'react';
import Loading from './Loading';
import { RoomContext } from '../context';
import ShowRooms from './ShowRooms';
import Title from './Title';

class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    let { featuredRooms, loading } = this.context;
    featuredRooms = featuredRooms.map(room => (
      <ShowRooms key={room.id} room={room} />
    ));

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRoom;
