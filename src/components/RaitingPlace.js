import React, { Component } from 'react';
import RaitingStar from './RaitingStar';


class RaitingPlace extends Component {
  render() {
    return (
      <div className="RaitingPlace col col-lg-5">
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

<<<<<<< HEAD
export default RaitingPlace;
=======
export default RaitingPlace;
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
