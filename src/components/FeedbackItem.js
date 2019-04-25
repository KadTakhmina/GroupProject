import React, { Component } from "react";
import PT from "prop-types";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import "./styles/FeedbackItem.css";

class RaitingComments extends Component {
  render() {
    const { comments } = this.props;
    const commentsBlock = comments.map(i => {
      return <div className="FeedbackItem col-sm-4 col-md-4 col-lg-3 " />;
    });
    return { commentsBlock };
  }
}

RaitingComments.propTypes = {
  comments: PT.array.isRequired
};
export default RaitingComments;
