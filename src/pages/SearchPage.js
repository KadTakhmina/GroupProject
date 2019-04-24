import React, { Component ,Fragment } from 'react';
// import TypeIt from 'TypeIt';
import { Layout,VideoBg, Categories, Heading} from "../components";
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
        {/* <div className="cover"></div>  */}
      <Layout> 
        {/* <Header/> */}
        {/* <Type/> */}
        <Heading/>
        <Categories/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

