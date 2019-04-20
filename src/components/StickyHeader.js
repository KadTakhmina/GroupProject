import React, { Component } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import userPhoto from "../img/user.svg"

import "./styles/var.css";
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  //user
  constructor() {
    super();
    this.state = {
     userPhoto: userPhoto,
     userName:"Имя",
     userLastName: "Пользователя"
    //  openLogin: false
    }
  }

  render() {
    return (
     
      <div className="StickyHeader ">
       <nav className="navbar navbar-expand-lg container">
        {/* <Link class="navbar-brand" to="/" >logo </Link> */}


        {/* <User 
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}
               />    */}
        <button class="navbar-toggler navBarToggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse menu" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link link" to="/">Главная </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/">Отели</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/restauranRatings">Рестораны</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/">Развлечения</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/">Услуги</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/">Курсы</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle link" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Еще
              </Link>
              <div class="dropdown-menu more" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item link" to="/">Подробнее</Link>
                <Link class="dropdown-item link" to="/">Отзывы</Link>
                <Link class="dropdown-item link" to="/">О нас</Link>
              </div>
            </li>
          </ul> 
          </div>
          </nav>
          </div>
    );
  }
}

export default StickyHeader;
