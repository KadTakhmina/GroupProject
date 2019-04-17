import React, { Component } from 'react';


import {Layout,AboutPlace, Map, SimilarPlace,CommentCarousel} from "../components";


class Restaurants extends Component {
 
  render() {
    return (
      <Layout>
				<AboutPlace/> 
         <Map/>
        <CommentCarousel/>
        <SimilarPlace/>
			</Layout>
    );
  }
}

export default Restaurants;
