import React, { Component } from 'react';
import PT from 'prop-types';



import {RaitingImg,RaitingComments} from "../components";
import "./styles/RaitingCard.css"


class RaitingCard extends Component {
 
  render() {
		const {resultsImg,commentsCount,comments} = this.props;
    return (
      <div className="RaitingCard row">
					<RaitingImg 
						resultsImg = {resultsImg}
						commentsCount= {commentsCount}	
						/>
			 
				<RaitingComments comments = {comments}/>
			</div>
			
	
    );
  }
}

RaitingCard.propTypes = {
	comments: PT.array.isRequired
}

export default RaitingCard;
