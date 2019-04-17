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
	axios.get(`https://api.myjson.com/bins/13yaww`)
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
			<RaitingNav resultsCount = {this.state.results.length}/>
			{this.state.results.map(i => {
		
				return(<RaitingCard 
										key =  {this.state.results.length} 
										resultsImg = {i.photo}
									  resultsName = {i.name}
									  raitingsCount = {i.raiting}
										commentsCount= {this.state.results.length} 
										comments= {i.comments} />)
			})}
			
			</Layout>		
    );
  }
}

export default RaitingsPage;
