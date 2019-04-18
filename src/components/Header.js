import React, { Component } from 'react';

import HeaderInput from "./HeaderInput";
import User from "./User";
import userPhoto from "../img/user.svg"
// import "./styles/HeaderBg.css"

<<<<<<< HEAD

=======
import "./styles/Header.css"
>>>>>>> 256b6a6c949d9be51d4c213e246d0e92fcfb7361

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
        <HeaderInput />     
>>>>>>> 256b6a6c949d9be51d4c213e246d0e92fcfb7361
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
