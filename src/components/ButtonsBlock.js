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
          <a href="https://www.instagram.com/explore/locations/1426815637368249/niko"><Button val = {this.state.btn1}/></a>
        </div>
        
      </div>
    );
  }
}

export default ButtonsBlock;
