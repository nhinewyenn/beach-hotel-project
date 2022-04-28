import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import FeaturedRoom from '../components/FeaturedRoom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Luxurious Rooms"
          subtitle="deluxe rooms starting at $235"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
      <Slider />
    </>
  );
};

export default Home;
