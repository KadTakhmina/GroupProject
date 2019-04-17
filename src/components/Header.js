import React, { Component } from 'react';


import HeaderInput from "./HeaderInput";
import User from "./User";
import userPhoto from "../img/user.svg"
import "./styles/HeaderBg.css"
import VideoBg from "./VideoBg";


class Header extends Component {
  constructor() {
    super();
    this.state = {
     userPhoto: userPhoto,
     userName:"Имя",
     userLastName: "Пользователя"
    }
  }
  render() {
    return (
      <div className = "Header ">
        <div className=" container row  ">
        <img className = "logo col-2"
        alt ="logo"/>
        <HeaderInput />
        <VideoBg/>
        <User 
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}
               />   
      </div>
      </div>
      
    );
  }
}

export default Header;
