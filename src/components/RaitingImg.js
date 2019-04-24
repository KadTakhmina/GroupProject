import React, { Component } from 'react';
import  { Link, } from 'react-router-dom';
import PT from "prop-types";
import 'react-rater/lib/react-rater.css';

import "./styles/RaitingImg.css"



class RaitingImg extends Component {
 
  render() {
		const {resultsImg,commentsCount,resultsName,goToDescription} = this.props;
    return (
			<div className="RaitingImg 	 col-lg-6 col-sm-12 col-md-7">
			
				<img class = "w-100 h-100  resultsImg" alt = "results" src ={resultsImg}/>
				<div className = "resultsHoverBlock img-fluid">
					<p onClick = {goToDescription}  className = "resultsName">{`"${resultsName}"`}</p>
					<div>
				
					</div>
					<Link to = "/" class = "resultsCommentCount">{`${commentsCount} отзыва`}</Link>
				</div>			
			</div>
    );
  }
}

RaitingImg.propTypes = {
	resultsImg: PT.string.isRequired,
	commentsCount: PT.string.isRequired,
	resultsName: PT.string.isRequired,
}

export default RaitingImg;
