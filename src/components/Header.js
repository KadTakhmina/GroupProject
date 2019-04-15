import React, { Component } from 'react';
// import './App.css';

import HeaderInput from "./HeaderInput";
import User from "./User";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      val: " this is input"
    }
  }
  render() {
    return (
      <div className="Header row">
        <img className = "logo col-2"
        alt ="logo"/>
        <HeaderInput val = {this.state.val}/>
        <User />
      </div>
    );
  }
}

export default Header;
