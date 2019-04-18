import React, { Component } from 'react';


import HeaderInput from "./HeaderInput";
import User from "./User";
import userPhoto from "../img/user.svg"
<<<<<<< HEAD
import "./styles/HeaderBg.css"

=======
import "./styles/Header.css"
>>>>>>> 90664f21438f31e7e0330222e29ddc2319999440


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
      <div className = "Header container ">
        <div className=" container row  ">
        <img className = "logo col-2"
        alt ="logo"/>
        <HeaderInput />
<<<<<<< HEAD
     
=======
>>>>>>> 90664f21438f31e7e0330222e29ddc2319999440
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
