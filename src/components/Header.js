import React, { Component } from 'react';

import HeaderInput from "./HeaderInput";
import LoginPage from "./LoginPage";
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
     userLastName: "Пользователя",
     openLogin: false
    }

    this.toggleLogin =   this.toggleLogin.bind(this);
  }
  toggleLogin() {
    this.setState({
      openLogin: !this.state.openLogin,
    })
  }

  render() {
    return (
      <div className = "Header container ">
        <div className=" container row  ">
        <img className = "logo col-2"
        alt ="logo"/>
        <HeaderInput />
        <User 
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}
              toggleLogin = {this.toggleLogin}
               />   
        <LoginPage openLogin = {this.state.openLogin}/>
      </div>
      </div>
    );
  }
}

export default Header;
