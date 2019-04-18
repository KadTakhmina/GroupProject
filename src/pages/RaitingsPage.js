import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";


import {Layout,RaitingNav,RaitingCard} from "../components";

class RaitingsPage extends Component {
 constructor() {
	 super()
	 this.state = {
		 
			 results: [],
			 currentEdit: [],
			redirect: false
	 }
	 this.goToDescription = this.goToDescription.bind(this);
		this.renderRedirect = this.renderRedirect.bind(this);
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

renderRedirect()  {
	if (this.state.redirect) {
		return <Redirect to='/viewPage' />
	}
}	

componentDidUpdate() {
	localStorage.setItem("currentEdit", JSON.stringify(this.state.currentEdit));
}


goToDescription(id) {
	this.setState({
		currentEdit: this.state.results.filter(ce => ce.id === id),
		redirect:true
	});
	
}


  render() {
    return (
      <Layout>
			<div className = "container">
			<RaitingNav resultsCount = {this.state.results.length}/>
			{this.state.results.map(i => {
		
				return(<RaitingCard 
										key =  {i.id} 
										resultsImg = {i.album[0]}
									  resultsName = {i.name}
									  raitingsCount = {i.raiting}
										commentsCount= {this.state.results.length} 
										comments= {i.comments} 
										goToDescription = {() => {this.goToDescription(i.id)}}
										/>)
			})}
			</div>
			
			{this.renderRedirect()}
			</Layout>		
    );
  }
}

export default RaitingsPage;
