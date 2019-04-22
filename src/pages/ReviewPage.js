import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import{Link} from "react-router-dom";

import '../components/styles/ReviewPage.css';
import { Layout } from '../components';



class ReviewPage extends Component {

  render() {
   
    return (
      <Layout>
        <div className="ReviewPage row justify-content-center ">
          <div className="mainContainer col-6 col-md-6 col-lg-6">
          <div className="aboutPlace">
            <div className="img  col-md-4 col-lg-4 col-4">
              <img alt ="alttext" src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="place_image"/> 
            </div>
            <div className="about  col-md-8 col-lg-8 col-8">
                <h2>Название ресторана</h2>
                <p>Адрес ресторана</p>
            </div>
          </div>
          <div className="pageTitle col-md-12 col-lg-12 col-12">
            <h2>Ваш отзыв</h2>
          </div>
          <div className="Raiting col-md-12 col-lg-12 col-12">
            <p>Дайте оценку этому заведению</p>
            <Rater className="stars" total={5} rating={0} >
          </Rater>
          </div>
          <div className="col-md-12 col-lg-12 col-12">
            <label >Ваши впечатления</label>
            <br/>
            <textarea className="reviewForm"></textarea>
          </div>
          <Link to = "/restauranRatings"><input className="send btn btn-primary" type="submit"/></Link>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ReviewPage;
