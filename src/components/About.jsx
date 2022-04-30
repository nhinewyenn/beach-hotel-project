import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
import hotelSketch from '../images/about.jpg';

const About = () => {
  return (
    <section
      className="about-us about-bg section-padding flex-center"
      id="about"
    >
      <div className="about-content flex-center">
        <div className="about">
          <Title title="About" className="about-title" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
            provident eveniet unde deserunt molestias.
          </p>
          <Link className="btn-primary" to="/rooms">
            Explore
          </Link>
        </div>
        <div className="about-main-img flex-center">
          <img src={hotelSketch} alt="hotel outline" />
        </div>
        <div className="history">
          <Title title="History" className="about-title" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
            provident eveniet unde deserunt molestias.
          </p>
          <Link className="btn-primary about-btn" to="/rooms">
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
