import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  // Make data/items easier to format in other components
  formatData(items) {
    let tempItems = items.map(data => {
      let id = data.sys.id;
      let images = data.fields.images.map(img => img.fields.file.url);
      let room = { ...data.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom(slug) {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(el => el.slug === slug);
    return room;
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = e.target;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  }

  filterRooms() {
    let {
      rooms,
      type,
      capacity,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      price,
      breakfast,
      pets,
    } = this.state;

    // All the rooms
    let currentRoom = [...rooms];

    // Transform value to number
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter value
    if (type !== 'all')
      currentRoom = currentRoom.filter(room => room.type === type);
    if (capacity !== 1)
      currentRoom = currentRoom.filter(room => room.capacity >= capacity);
    // filter price
    currentRoom = currentRoom.filter(room => room.price <= price);
    // filter size
    currentRoom = currentRoom.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    // filter extras
    if (breakfast)
      currentRoom = currentRoom.filter(room => room.breakfast === true);
    if (pets) currentRoom = currentRoom.filter(room => room.pets === true);
    // Change state
    this.setState({ sortedRooms: currentRoom });
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom.bind(this),
          handleChange: this.handleChange.bind(this),
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
