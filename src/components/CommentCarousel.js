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
  {results.map((comment, index) => <div key={index} className = "CommentCarousel row text-center ">
  <div className = " col-lg-4 col-md-4 col-12 ">
  <p className ="commentsOwnerPhoto"><img className= "img-fluid" src={comment.photo} alt="commentsOwnerPhoto"/></p> 
  </div>
  <div className = " col-lg-8 col-md-8 col-12 ">
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
