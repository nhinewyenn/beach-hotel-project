import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import '../App.css';
import sliderData from '../slider-data';
import { Fade } from 'react-awesome-reveal';

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;

  // Change slide
  function nextSlide() {
    // If on the last slide, go back to first slide
    setCurSlide(curSlide === slideLength - 1 ? 0 : curSlide + 1);
  }

  function prevSlide() {
    setCurSlide(curSlide === 0 ? slideLength - 1 : curSlide - 1);
  }

  function auto() {
    slideInterval = setInterval(nextSlide, 10000);
  }

  useEffect(() => {
    setCurSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) auto();
    return () => clearInterval(slideInterval);
  }, [curSlide]);

  return (
    <Fade>
      <section className="slider">
        <FaArrowAltCircleLeft
          className="arrow arrow-prev"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="arrow arrow-next"
          onClick={nextSlide}
        />
        {sliderData.map((data, i) => (
          <div className={i === curSlide ? 'slide current' : 'slide'} key={i}>
            {i === curSlide && (
              <>
                <img src={data.img} alt="current slide" />
                <div className="slider-content">
                  <h2>{data.heading}</h2>
                  <p>{data.desc}</p>
                  <hr />
                  <Link to="/rooms">
                    <button className="btn-primary">Discover</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </Fade>
  );
};

export default Slider;
