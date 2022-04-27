import React from 'react';
import { useState } from 'react';
import {
  FaCheckCircle,
  FaCocktail,
  FaShuttleVan,
  FaTimes,
} from 'react-icons/fa';
import Title from './Title';

const Services = () => {
  const [service, setService] = useState([
    {
      icon: <FaCocktail />,
      title: 'Free Cocktails',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, cumque!',
    },
    {
      icon: <FaTimes />,
      title: 'Free Cancellation',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, cumque!',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, cumque!',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Best Rates',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, cumque!',
    },
  ]);

  return (
    <section className="services">
      <Title title="Services" />
      <div className="services-center">
        {service.map((item, i) => (
          <article key={i} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
