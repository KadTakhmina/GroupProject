import React, { Component } from 'react';


import {Layout,Carousel,MainInput,VideoBg} from "../components";


class SearchPage extends Component {
 
  render() {
    return (
      <Layout>
        <Carousel/>
        <MainInput/>
        <VideoBg/>
      </Layout>
    );
  }
}

export default SearchPage;

