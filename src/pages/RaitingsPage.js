import React, { Component } from 'react';

import {Layout,RaitingNav,RaitingImg} from "../components";
import resultsImg from "../img/resultsImg.svg"

class RaitingsPage extends Component {
 constructor() {
	 super()
	 this.state = {
		 resultsImg: resultsImg,
		 commentsCount: 54
	 }
 }
  render() {
    return (
      <Layout>
			<div className = "col-lg-6 col-sm-12">
				<RaitingNav/>
				<RaitingImg 
					resultsImg = {this.state.resultsImg}
					commentsCount: {this.state.commentsCount}	
					/>
			</div>
			</Layout>
    );
  }
}

export default RaitingsPage;
