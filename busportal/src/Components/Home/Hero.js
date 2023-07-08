import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (

    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.cdac.in/index.aspx?id=img_Mumbai-cb" className="d-block w-100" alt="..." height="500px" />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/multinational-kids-going-school-arabic-japanese-chinese-group-happy-smile-childhood-vector-illustration_1284-42348.jpg?w=996&t=st=1688785658~exp=1688786258~hmac=bf6f323d2262f7de6cfbe084587f19a2eeb0e4c11076d6e025602a93e7871d1e" className="d-block w-100" alt="..." height="500px" />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/free-vector/street-side-scene-with-school-bus-road-scene_1308-52281.jpg?t=st=1688734873~exp=1688735473~hmac=4233744c5cc43a55b03e732867f69d0bac0d6d3d514e71d69316df0e17423a1c" className="d-block w-100" alt="..." height="500px" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
};

export default Hero;
