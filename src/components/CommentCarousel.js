import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import  PT from "prop-types"

import "./styles/CommentCarousel.css";

class CommentCarousel extends Component {
  render() {

    const {comments} =this.props;
    return (
     
     <Slider>
        {comments.map((comment, index) => <div key={index} className = "CommentCarousel row text-center ">
        <div className = " col-lg-4 col-md-4 col-12 ">
        <p className ="commentsOwnerPhoto"><img className= "img-fluid" src={comment.commenterPhoto} alt="commentsOwnerPhoto"/></p> 
        </div>
        <div className = " col-lg-8 col-md-8 col-12 ">
        <Rater total={5} rating={comment.commenterStars} interactive={false}>
        </Rater>
          <h3>{`${comment.commenterName}  ${comment.commenterLastName}`}</h3>
          <p>{comment.commenterText}</p>
        </div>
          
        </div>)}
      </Slider>
    );
  }
}
CommentCarousel.propTypes = {
  comments: PT.array.isRequired
}


export default CommentCarousel;
