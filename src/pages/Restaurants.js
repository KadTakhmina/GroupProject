import React, { Component } from 'react';


import {Layout,AboutPlace, ButtonsBlock, Map, SimilarPlace} from "../components";

class Restaurants extends Component {
 
  render() {
    return (
      <Layout>
				<AboutPlace/>
        <ButtonsBlock/>
        <Map/>
        <SimilarPlace/>
			</Layout>
    );
  }
}

export default Restaurants;
