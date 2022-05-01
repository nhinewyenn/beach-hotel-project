import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

// Get all unique value
function getUnique(items, value) {
  return [...new Set(items.map(item => item[value]))];
}

const RoomsFilter = ({ rooms }) => {
  const ctx = useContext(RoomContext);

  // Get unique room types
  let types = getUnique(rooms, 'type');
  // Add all types
  types = ['all', ...types];
  types = types.map((item, i) => (
    <option value={item} key={i}>
      {item}
    </option>
  ));

  // Get unique capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="Search rooms" />
      <form className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={ctx.type}
            className="form-control"
            onChange={ctx.handleChange}
          >
            {types}
          </select>
        </div>

        {/* Guest capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={ctx.capacity}
            className="form-control"
            onChange={ctx.handleChange}
          >
            {people}
          </select>
        </div>

        {/* Room price */}
        <div className="form-group">
          <label htmlFor="price">Room price: ${ctx.price}</label>
          <input
            type="range"
            name="price"
            min={ctx.minPrice}
            max={ctx.maxPrice}
            id="price"
            value={ctx.price}
            onChange={ctx.handleChange}
            className="form-control-range"
          />
        </div>

        {/* Extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={ctx.breakfast}
              onChange={ctx.handleChange}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={ctx.pets}
              onChange={ctx.handleChange}
            />
            <label htmlFor="pets">Pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomsFilter;
