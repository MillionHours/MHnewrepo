import React from 'react';

import  c2 from "../img/c2.jpg";
import c3 from "../img/c3.jpg";
import c5 from "../img/c5.jpg";
// import { Carousel } from 'react-bootstrap';

const Corousel = () => {
  return<div>
 
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c2} class="d-block w-100" style={{height:350}}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" style={{height:350}}  alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c5} class="d-block w-100" style={{height:350}}  alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
 
};

export default Corousel;
