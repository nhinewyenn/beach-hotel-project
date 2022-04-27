import React from 'react';
import { withRoomConsumer } from '../context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';

const RoomsContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) return <Loading />;

  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList sortedRooms={sortedRooms} />
    </div>
  );
};

export default withRoomConsumer(RoomsContainer);
