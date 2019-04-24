import React, { Component } from 'react';
import PT from "prop-types";
import Slider from 'react-animated-slider';

import './styles/BgCarousel.css';

class BgCarousel extends Component {
  
  render() {
    const {album} = this.props;
    return (
      <Slider>
        {album.map((g, index) => <div key={index} className = "CommentCarousel row text-center ">
        <div className = "col-lg-12 col-md-12 col-12 ">
        <img className= " carousel img-fluid" src={album[index]} alt="placePhoto"/>
        </div>
          
        </div>)}
      </Slider>
      
    );
  }
}
BgCarousel.propTypes = {
  album: PT.array.isRequired,
}

export default BgCarousel;
