import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import PT from "prop-types";

import "./styles/RaitingImg.css"
import   RaitingStar  from './RaitingStar';




class RaitingImg extends Component {
 
  render() {
		const {resultsImg,commentsCount,resultsName} = this.props
    return (
			<div className="RaitingImg 	col-lg-6 col-sm-12 col-md-7">
				<img class = "w-100 h-100  resultsImg" alt = "results" src ={resultsImg}/>
				<div className = "resultsHoverBlock img-fluid">
					<Link to = "/" class = "resultsName">{`"${resultsName}"`}</Link>
					<RaitingStar/>
					<Link to = "/" class = "resultsCommentCount">{`${commentsCount} отзыва`}</Link>
				</div>			
			</div>
    );
  }
}

RaitingImg.propTypes = {
	resultsImg: PT.string.isRequired,
	commentsCount: PT.string.isRequired,
}

export default RaitingImg;
