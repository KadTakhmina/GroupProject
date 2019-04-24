import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


import "./styles/CommentCarousel.css";

class CommentCarousel extends Component {
  render() {

    const {comments} =this.props;
    return (
     
     <Slider>
        {comments.map((comment, index) => <div key={index} className = "CommentCarousel row text-center ">
        <div className = " col-lg-5 col-md-5 col-12 ">
        <p className ="commentsOwnerPhoto"><img className= "img-fluid" src={comment.commenterPhoto} alt="commentsOwnerPhoto"/></p> 
        </div>
        <div className = " col-lg-7 col-md-7 col-12 ">
        <Rater  total={5} rating={comment.commenterStars} interactive={false}>
        </Rater>
          <h3>{`${comment.commenterName}  ${comment.commenterLastName}`}</h3>
          <p  className="comment">{comment.commenterText}</p>
        </div>
          
        </div>)}
      </Slider>
    );
  }
}

export default CommentCarousel;
