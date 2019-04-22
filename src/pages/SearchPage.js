import React, { Component ,Fragment } from 'react';
// import TypeIt from 'typeit';
import { Layout,MainInput,VideoBg, Categories, Header, TypeIt,} from "../components";
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
        {/* <div className="cover"></div> */}
      <Layout> 
        <Header/>
        <TypeIt/>
        {/* <MainInput/> */}
        <Categories/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

