import React, { Component } from 'react';
import RaitingStar from './RaitingStar';

import './styles/var.css';
import './styles/RaitingPlace.css';



class RaitingPlace extends Component {
  render() {
    return (
      <div className="RaitingPlace col col-lg-6">
         <div class = " place-rating-block">
            <p class = "place-rating"><b>Рейтинг</b></p>
            <span class = "rating-year">за год</span>
            <span class = "rating-all choosen">за все время</span>
          <div class="rating-star-block">
            <RaitingStar/>
          </div>
      <div class = "comment-block">
        <h1 class = "comment-amount">20</h1>
        <p class = "comment">отзывов</p>
      </div>
        
    </div>
      </div>
    );
  }
}


export default RaitingPlace;

