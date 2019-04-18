import React, { Component } from 'react';

import {Layout,AboutPlace, Map, SimilarPlace,CommentCarousel,BgCarousel,Description} from "../components";


class Restaurants extends Component {
  constructor() {
    super()
    this.state = {
      
        results: [],
        currentData:JSON.parse(localStorage.getItem("currentEdit"))
    }
    
  }
  componentDidMount() {
   this.setState({
    currentData:JSON.parse(localStorage.getItem("currentEdit"))
   });
  }
  render() {
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
         <Map/>
        <CommentCarousel comments = {this.state.currentData[0].comments}/>
        <SimilarPlace/>
			</Layout>
    );
  }
}

export default Restaurants;
