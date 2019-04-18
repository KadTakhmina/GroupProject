import React, { Component } from 'react';
import  { Link, } from 'react-router-dom';
import PT from "prop-types";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import "./styles/RaitingImg.css"





class RaitingImg extends Component {
 
  render() {
		const {resultsImg,commentsCount,resultsName,raitingsCount,goToDescription} = this.props;
		console.log(raitingsCount);
    return (
			<div className="RaitingImg 	 col-lg-6 col-sm-12 col-md-7">
				<img class = "w-100 h-100  resultsImg" alt = "results" src ={resultsImg}/>
				<div className = "resultsHoverBlock img-fluid">
					<p onClick = {goToDescription}  className = "resultsName">{`"${resultsName}"`}</p>
					<div>
					<Rater total={5} rating={raitingsCount} interactive={false}>
				</Rater>
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
