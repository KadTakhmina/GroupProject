import React, { Component } from 'react';

import HeaderInput from "./HeaderInput";
import User from "./User";
import userPhoto from "../img/user.svg"
<<<<<<< HEAD
// import "./styles/HeaderBg.css"

=======
<<<<<<< HEAD
// import "./styles/HeaderBg.css"

import "./styles/Header.css"
=======
import "./styles/Header.css"

>>>>>>> 0ebc3056f1cb95b066de135ad5e285d67386f2bd
>>>>>>> 17e8b7f92fb4faeceb5c49d6e51194ac52e9a0a9

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
<<<<<<< HEAD
        <HeaderInput />
=======
<<<<<<< HEAD
        <HeaderInput />     
=======

        <HeaderInput />

>>>>>>> 0ebc3056f1cb95b066de135ad5e285d67386f2bd
>>>>>>> 17e8b7f92fb4faeceb5c49d6e51194ac52e9a0a9
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
