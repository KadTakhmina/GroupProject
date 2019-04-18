import React, { Component } from 'react';
import PT from 'prop-types';



import {RaitingImg,RaitingComments} from "../components";
import "./styles/RaitingCard.css"


class RaitingCard extends Component {
	constructor() {
		super() ;
		this.state = {
			comments: [],
		}
	}
  render() {
		const {resultsImg,commentsCount,raitingsCount,resultsName,comments,goToDescription} = this.props;
			
    return (
				<div className="RaitingCard row py-3">
					<RaitingImg 
						resultsImg = {resultsImg}
						commentsCount= {commentsCount}	
						resultsName= {resultsName}
						raitingsCount = {raitingsCount}	
						goToDescription = {goToDescription}
						/>
				<RaitingComments  
					comments = {comments[0]}	
				/>
			</div>
    );
  }
}

RaitingCard.propTypes = {
	comments: PT.array.isRequired,
	resultsImg:PT.string.isRequired,
	commentsCount:PT.string.isRequired,
	resultsName:PT.string.isRequired,
	goToDescription: PT.func.isRequired
	
}

export default RaitingCard;
