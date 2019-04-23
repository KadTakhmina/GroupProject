import React, { Component } from 'react';
import axios from 'axios';


import {Layout,AboutPlace, Map, SimilarPlace,CommentCarousel,BgCarousel,Description,FeedbackForm} from "../components";


class Restaurants extends Component {
  constructor() {
    super()
    this.state = {
        currentData:JSON.parse(localStorage.getItem("currentEdit")), 
        results: [],
    }
    
  }
  

componentDidMount() {
  axios.get(`https://api.myjson.com/bins/ce8eo`)
    .then(res => {
       
      this.setState({ results: res.data});
    })
    .catch(function (error) {
      console.log(error);
    });
}


  
  render() {
    const results = this.state.results.filter(ce => ce.id !== this.state.currentData[0].id);
    
    return (
      <Layout>
        <Description name = {this.state.currentData[0].name}
                    description = {this.state.currentData[0].description}
        />
        <BgCarousel album = {this.state.currentData[0].album} />
				<AboutPlace name = {this.state.currentData[0].name}
                    pricePerPerson = {this.state.currentData[0].pricePerPerson}
                    raiting = {this.state.currentData[0].raiting}
                    comments = {this.state.currentData[0].comments}
        /> 
        <FeedbackForm name = {this.state.currentData[0].name}
                      logo = {this.state.currentData[0].logo}
        />
         <Map/>
        <CommentCarousel comments = {this.state.currentData[0].comments}/>
        <SimilarPlace  results = {results}/>
        
			</Layout>
    );
  }
}

export default Restaurants;
