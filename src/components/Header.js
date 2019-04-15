import React, { Component } from 'react';


import HeaderInput from "./HeaderInput";
import User from "./User";
import userPhoto from "../img/user.svg"

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
      <div className="Header row d-flex justify-content-between align-items-center ">
        <img className = "logo col-2"
        alt ="logo"/>
<<<<<<< HEAD
        <HeaderInput />
        <User 
            name = {this.state.userName}
            lastName = {this.state.userLastName}
            photo = {this.state.userPhoto}/>
=======
<<<<<<< HEAD
        <HeaderInput />
        <User 
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}
               />
=======
        <HeaderInput val = {this.state.val}/>
        <User />
>>>>>>> 67bcf4fd1ef1764becec94b3e0d8fdbe0918b003
>>>>>>> 5438974c0a4fc09fb33ad63cb3c231b6656d6bf1
      </div>
    );
  }
}

export default Header;
