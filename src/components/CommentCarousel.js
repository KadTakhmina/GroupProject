import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


import "./styles/CommentCarousel.css";

class CommentCarousel extends Component {
  render() {
    const {results} =this.props;
    return (
     
     <Slider>
  {results.map((comment, index) => <div key={index} className = "CommentCarousel row ">
  <div className = "commentsOwnerPhoto col-3"> <img src={comment.photo} alt="commentsOwnerPhoto"/></div>
  <div className = "offset-1 col-8">
  <Rater total={5} rating={2} interactive={false}>
				</Rater>
    <h3>{`${comment.name}  ${comment.name}`}</h3>
    <p>{comment.description}</p>
  </div>
    
  </div>)}
</Slider>
    );
  }
}

export default CommentCarousel;
