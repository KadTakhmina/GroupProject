import React, { Component } from 'react';

import {Layout,RaitingNav,RaitingCard} from "../components";
import resultsImg from "../img/resultsImg.svg"
import ownerPhoto from "../img/user.svg"


class RaitingsPage extends Component {
 constructor() {
	 super()
	 this.state = {
		 resultsImg: resultsImg,
		 resultsName: "resultsName",
		 commentsCount: 54,
		 comments: {
			 text:"Ходили недавно с друзьями, все очень понравилось! Кухня просто огонь 🔥 все было очень вкусно. Музыка правда не...",
			 ownerName: "Name",
			 ownerLastName: "LastName",
			 ownerPhoto: ownerPhoto,
			 }
	 }
 }
  render() {
    return (
      <Layout>
			<RaitingNav/>
			<RaitingCard  resultsImg = {this.state.resultsImg}
									  resultsName = {this.state.resultsName}
										commentsCount= {this.state.commentsCount} 
										comments= {this.state.comments} />
			<RaitingCard  resultsImg = {this.state.resultsImg}
									  resultsName = {this.state.resultsName}
										commentsCount= {this.state.commentsCount} 
										comments= {this.state.comments} />
			<RaitingCard  resultsImg = {this.state.resultsImg}
									  resultsName = {this.state.resultsName}
										commentsCount= {this.state.commentsCount} 
										comments= {this.state.comments} />
			
			</Layout>		
    );
  }
}

export default RaitingsPage;
