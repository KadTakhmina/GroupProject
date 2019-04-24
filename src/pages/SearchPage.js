import React, { Component ,Fragment } from 'react';
<<<<<<< HEAD
// import TypeIt from 'TypeIt';
import { Layout,VideoBg, Categories, Heading} from "../components";
=======
import { Layout,MainInput,VideoBg, Categories, Header, Heading} from "../components";
>>>>>>> 6241732ca17c6aedccdba1e46f9dfdadce89f571
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
      <Layout> 
<<<<<<< HEAD
        {/* <Header/> */}
        {/* <Type/> */}
        <Heading/>
        <Categories/>
=======
        <Header/>
        <Heading/>
        
>>>>>>> 6241732ca17c6aedccdba1e46f9dfdadce89f571
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

