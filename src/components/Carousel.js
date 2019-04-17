import React, { Component } from 'react';
import './styles/Carousel.css';
import hotelsIcon from "../img/hotels.svg"
import entertainsIcon from "../img/entertains.svg"
import servicesIcon from "../img/services.svg"
import coursesIcon from "../img/courses.svg"

class Carousel extends Component {
 
  render() {
    return (
      <div className="Carousel ">
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">      
          <div class="carousel-inner">
            <div class="carousel-item active d-flex justify-content-between ">
              <div className = "navCarouselItem">
                <img src={hotelsIcon} alt="hotelsIcon"/>
                <p>Отели</p>
              </div>
              <div className = "navCarouselItem">
              <img src={entertainsIcon} alt="entertainsIcon"/>
                <p>Развлечения</p>
              </div>
              <div className = "navCarouselItem">
              <img src={servicesIcon} alt="servicesIcon"/>
                <p>Услуги</p>
              </div>
              <div className = "navCarouselItem">
              <img src={coursesIcon} alt="coursesIcon"/>
                <p>Курсы</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className = "navCarouselItem">
              <img src={servicesIcon} alt="servicesIcon"/>
                <p>№№№№№№</p>
              </div>
            </div>
            <div class="carousel-item">
              <div className = "navCarouselItem">
              <img src={servicesIcon} alt="servicesIcon"/>
                <p>""""""</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Carousel;
