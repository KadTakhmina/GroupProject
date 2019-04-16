import React, { Component } from 'react';
import PT from 'prop-types';

import {RaitingStar} from "../components";
import "./styles/RaitingComments.css"


class RaitingComments extends Component {
 
  render() {
		const {comments} = this.props;
    return (
      <div className="RaitingComments offset-lg-1 col-lg-5 col-sm-12 col-md-5 text-left">
				<RaitingStar/>
				<p>{comments.text}</p>
				<div className = "ownerPhotoBox"><img src={comments.ownerPhoto} alt=""/></div>
				<span className = "commentOwnerName">{`${comments.ownerName}  ${comments.ownerLastName}`}</span>
			</div>
	
	
    );
  }
}


RaitingComments.propTypes = {
	comments: PT.array.isRequired
}
export default RaitingComments;
