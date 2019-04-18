import React, { Component } from 'react';
import axios from 'axios';
import {Layout,RaitingNav,RaitingCard} from "../components";

class RaitingsPage extends Component {
 constructor() {
	 super()
	 this.state = {
		 
			 results: []
	 }
	 
 }

componentWillMount() {
	axios.get(`https://api.myjson.com/bins/ce8eo`)
	.then(res => {
		 
		this.setState({ results: res.data });
	})
	.catch(function (error) {
    console.log(error);
  });
}


  render() {
    return (
      <Layout>
			<div className = "container">
			<RaitingNav resultsCount = {this.state.results.length}/>
			{this.state.results.map(i => {
		
				return(<RaitingCard 
										key =  {this.state.results.length} 
										resultsImg = {i.album[0]}
									  resultsName = {i.name}
									  raitingsCount = {i.raiting}
										commentsCount= {this.state.results.length} 
										comments= {i.comments} />)
			})}
			</div>
			
			
			</Layout>		
    );
  }
}

export default RaitingsPage;
