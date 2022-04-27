import React from 'react';
import ShowRooms from './ShowRooms';

const RoomsList = ({ sortedRooms }) => {
  if (sortedRooms.length === 0)
    return (
      <div className="empty-search">
        <h3>Unfortunately, no rooms matched your search query</h3>
      </div>
    );

  return (
    <section className="roomsList">
      <div className="roomsList-center">
        {sortedRooms.map(item => (
          <ShowRooms key={item.id} room={item} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
