import React, { Component } from 'react';

import HeaderInput from "./HeaderInput";
import LoginPage from "../pages/LoginPage";
import User from "./User";
import userPhoto from "../img/user.svg"
import "./styles/Header.css"


// import "./styles/HeaderBg.css"



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
      <div className = "container ">
        <div className="Header row">
        {/* <img className = "logo col-2"
        alt ="logo"/> */}
        {/* <HeaderInput /> */}
        <div className  = "col-lg-12 col-md-12 col-12 ">
        <User
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}

               />   
       </div>
      </div>
      </div>
    );
  }
}

export default Header;
