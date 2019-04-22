import React, { Component } from 'react';


import Button from "./Button";
import './styles/var.css';
import './styles/ButtonsBlock.css';


class ButtonsBlock extends Component {
  constructor() {
    super();
    this.state = {
      btn1: "Instagram",
      btn2: "Адрес"
    }
  }
  render() {
    return (
      <div className="ButtonsBlock row">
        <div class = "col col-7 placeButtonBlock">
          <Button val = {this.state.btn2}/>
          <Button val = {this.state.btn1}/>
        </div>
        
      </div>
    );
  }
}

export default ButtonsBlock;
