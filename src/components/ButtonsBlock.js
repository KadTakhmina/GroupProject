import React, { Component } from 'react';
import Button from "./Button";
import RaitingStar from './RaitingStar';


class ButtonsBlock extends Component {
  constructor() {
    super();
    this.state = {
      btn1: "Заказать",
      btn2: "Адрес"
    }
  }
  render() {
    return (
      <div className="ButtonsBlock row">
        <div class = "col col-lg-7 place-button-block">
          <Button val = {this.state.btn2}/>
          <Button val = {this.state.btn1}/>
        </div>
        <div class = "col col-lg-5 user-rating-block">
          <RaitingStar/>
          <p>Оставить отзыв</p>
        </div>
      </div>
    );
  }
}

<<<<<<< HEAD
export default ButtonsBlock;
=======
export default ButtonsBlock;
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
