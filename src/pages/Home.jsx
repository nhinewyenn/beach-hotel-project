import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Banner from '../components/Banner';
import FeaturedRoom from '../components/FeaturedRoom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import MainFooter from '../components/MainFooter';

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
      <About />
      <Services />
      <FeaturedRoom />
      <Slider />
      <Footer />
      <MainFooter />
    </>
  );
};

export default Home;
