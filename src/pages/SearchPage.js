import React, { Component ,Fragment} from 'react';


import {Layout,Carousel,MainInput,VideoBg} from "../components";


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
      <Layout> 
        {/* <Carousel/> */}
        <MainInput/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

