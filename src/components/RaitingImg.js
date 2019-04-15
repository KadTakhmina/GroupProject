import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import PT from "prop-types";

import "./styles/RaitingImg.css"



class RaitingImg extends Component {
 
  render() {
		const {resultsImg,commentsCount} = this.props
    return (
			<div className="RaitingImg">
				<img class = "w-100 img-fluid resultsImg" alt = "results" src ={resultsImg}/>
				<div className = "resultsHoverBlock">
					<Link to = "/" class = "resultsName">“Restaurans Name”</Link></div>
					<ul >
						<li class = "resulsImgStar activ">&#x02605;</li>
						<li class = "resulsImgStar activ">&#x02605;</li>
						<li class = "resulsImgStar activ">&#x02605;</li>
					</ul>
					<Link to = "/" class = "resultsCommentCount">{`${commentsCount} отзыва`}</Link>
				</div>
    );
  }
}

RaitingImg.propTypes = {
	resultsImg: PT.string.isRequired,
	commentsCount: PT.string.isRequired,
}

export default RaitingImg;
