import React, { Component ,Fragment } from 'react';
<<<<<<< HEAD
// import TypeIt from 'typeit';
import { Layout,MainInput,VideoBg, Categories, Header, TypeIt,} from "../components";
=======
import { Layout,MainInput,VideoBg, Categories, Header, Heading} from "../components";
>>>>>>> 5dd43b0592e82b98098568c79f99043a58e77d83
import '../components/styles/SearchPage.css';


class SearchPage extends Component {
 
  render() {
    return (
      <Fragment>
        <VideoBg/>
        {/* <div className="cover"></div>  */}
      <Layout> 
        <Header/>
<<<<<<< HEAD
        <TypeIt/>
        {/* <MainInput/> */}
=======
        <Heading/>
>>>>>>> 5dd43b0592e82b98098568c79f99043a58e77d83
        <Categories/>
      </Layout>
      </Fragment>
      
    );
  }
}

export default SearchPage;

