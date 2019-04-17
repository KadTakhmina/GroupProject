import React, { Component } from 'react';
import PT from 'prop-types';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import "./styles/RaitingComments.css"


class RaitingComments extends Component {
 

  render() {
		const {comments} = this.props;
		
    return (
      <div className="RaitingComments offset-2 col-lg-5 col-sm-12 col-md-5 text-left">
				<Rater total={5} rating={comments.commenterStars} interactive={false}>
				</Rater>
				<p>{comments.commenterText}</p>
				<div className = "ownerPhotoBox"><img src={comments.commenterPhoto} alt="commenterPhoto"/></div>
				<span className = "commentOwnerName">{`${comments.commenterName}  ${comments.commenterLastName}`}</span>
			</div>
    );
  }
}


RaitingComments.propTypes = {
	comments: PT.array.isRequired
}
export default RaitingComments;
