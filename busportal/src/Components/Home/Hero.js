import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + '/assets/images/banner-01.jpg'}
            // src= "https://sunvalleyncr.in/images/SVIS-14.jpg"
          alt="bus1"
        />
        <Carousel.Caption>
          <h3>text</h3>
          <p>text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src={process.env.PUBLIC_URL + '/assets/images/banner-02.jpg'}
            src="https://davmeerut.org/File/135/Transport.jpg"
          alt="bus2"
        />

        <Carousel.Caption>
          <h3>text</h3>
          <p>text</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
