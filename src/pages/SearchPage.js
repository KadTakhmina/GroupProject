import React, { Component } from 'react';


import {Layout,Carousel,MainInput} from "../components";

class SearchPage extends Component {
 
  render() {
    return (
      <Layout>
        <Carousel/>
        <MainInput/>
      </Layout>
    );
  }
}

export default SearchPage;

