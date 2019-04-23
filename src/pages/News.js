import React, { Component } from 'react';
import 'react-rater/lib/react-rater.css';


import '../components/styles/News.css';
import { Layout } from '../components';



class News extends Component {

  render() {
   
    return (
      <Layout>
          <div className="news row">
             <div className="container">
             <h1 className="col-lg-12 col-md-12 col-12">Новости и Акции</h1>
             <div className="newsDiv">
                <img className = "col-lg-5 col-md-5 col-5" src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"/>
                <h3 className="newsDescription col-lg-7 col-md-7 col-7">Добро пожаловать на наш сайт!</h3>
             </div>
             </div>

          </div>
      </Layout>
    );
  }
}

export default News;
