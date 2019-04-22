import React, { Component ,Fragment } from 'react';
import { Layout,MainInput,VideoBg, Categories, Header, Heading} from "../components";
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
        {/* <div className="cover"></div> */}
      <Layout> 
        <Header/>
        <Heading/>
        <Categories/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

