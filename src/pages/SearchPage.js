import React, { Component } from 'react';


import {Layout,Carousel,MainInput} from "../components";
// import RunningString from '../components/RunningString';

class SearchPage extends Component {
 
  render() {
    return (
      <Layout>
        <Carousel/>
        <MainInput/>
        {/* <RunningString/> */}
      </Layout>
    );
  }
}

export default SearchPage;

