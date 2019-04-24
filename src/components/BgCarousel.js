import React, { Component } from 'react';
import PT from "prop-types";


import './styles/BgCarousel.css';

class BgCarousel extends Component {
  
  render() {
    const {album} = this.props;
    const galleryCarousel = album.map(( g,index) => {
      return (<div class="carousel-item active" key = {index}>
               <img src={g} class="d-block w-100 img-fluid" alt="..."/>
             </div>)
    })
    return (
      <div id="carouselExampleControls " class="carousel slide container-fluid " data-ride="carousel">
          <div class="carousel-inner">
            {galleryCarousel}
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    );
  }
}
BgCarousel.propTypes = {
  album: PT.array.isRequired,
}

export default BgCarousel;
