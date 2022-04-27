import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

const RoomsFilter = () => {
  const ctx = useContext(RoomContext);

  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={ctx.type}
            className="form-control"
            onChange={ctx.handleChange}
          />
        </div>

        {/* end of select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
