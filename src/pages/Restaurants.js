import React, { Component } from 'react';
import axios from 'axios';

import {Layout,AboutPlace, Map, SimilarPlace,CommentCarousel,BgCarousel,Description} from "../components";


class Restaurants extends Component {
  constructor() {
    super()
    this.state = {
      
        results: []
    }
    
  }
  componentWillMount() {
    axios.get(`https://api.myjson.com/bins/l35u8`)
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
        <Description/>
        <BgCarousel/>
				<AboutPlace/> 
         <Map/>
        <CommentCarousel results= {this.state.results}/>
        <SimilarPlace/>
			</Layout>
    );
  }
}

export default Restaurants;
