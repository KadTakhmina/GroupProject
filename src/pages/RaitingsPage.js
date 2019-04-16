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

componentDidMount() {
	axios.get(`https://api.myjson.com/bins/13tiug`)
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
			<RaitingNav/>
			{this.state.results.map(i => {
		
				return(<RaitingCard 
										key =  {this.state.results.length + 1} 
										resultsImg = {i.photo}
									  resultsName = {i.name}
										commentsCount= {this.state.results.length + 1} 
										comments= {i.comments} />)
			})}
			
			</Layout>		
    );
  }
}

export default RaitingsPage;
