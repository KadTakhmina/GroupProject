import React, { Component ,Fragment} from 'react';
import {Layout,Carousel,MainInput,VideoBg} from "../components";
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
        <div className="cover"></div>
      <Layout> 
       
        {/* <Carousel/> */}
        <MainInput/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

