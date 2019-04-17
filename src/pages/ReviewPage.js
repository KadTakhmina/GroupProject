import React, { Component } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import '../components/styles/ReviewPage.css';
import { Layout } from '../components';



class ReviewPage extends Component {

  render() {
   
    return (
      <Layout>
        <div className="ReviewPage col-12 col-md-12 ">
          <div className="mainContainer">
          <div className="aboutPlace">
            <div className="img">
              <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" className="place_image"/> 
            </div>
            <div className="about">
                <h2>Название ресторана</h2>
                <p>Адрес ресторана</p>
            </div>
          </div>
          <div className="pageTitle">
            <h2>Ваш отзыв</h2>
          </div>
          <div className="Raiting">
            <p>Дайте оценку этому заведению</p>
            <Rater className="stars" total={5} rating={0} >
          </Rater>
          </div>
          <label>Ваши впечатления</label>
          <div>
            <textarea className="reviewForm"></textarea>
          </div>
          
          <input type="submit"/>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ReviewPage;
