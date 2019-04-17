import React, { Component } from 'react';
import Button from "./Button";
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

import './styles/var.css';
import './styles/ButtonsBlock.css';


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
        <Rater total={5} rating={0} >
				</Rater>
          <p>Оставить отзыв</p>
        </div>
      </div>
    );
  }
}

export default ButtonsBlock;
