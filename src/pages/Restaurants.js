import React, { Component } from 'react';


import {Layout,AboutPlace, ButtonsBlock, Map, SimilarPlace,CommentCarousel} from "../components";


class Restaurants extends Component {
 
  render() {
    return (
      <Layout>
				<AboutPlace/>
        <ButtonsBlock/>
        <Map/>
        <CommentCarousel/>
        <SimilarPlace/>
			</Layout>
    );
  }
}

export default Restaurants;
