import React, { Component } from "react";
import { Link } from "react-router-dom";

import User from "./User";
import userPhoto from "../img/user.svg"
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  constructor() {
    super();
    this.state = {
     userPhoto: userPhoto,
     userName:"Имя",
     userLastName: "Пользователя",
     actiiveHeaderLink: false
    }
  }

  render() {
    return (
     
      <div className="StickyHeader ">
       <nav className="navbar navbar-expand-lg container" style={{"border-bottom": "1px solid rgba(255,255,255,.1)",
    "background": "rgba(0,0,0,.1);"}} >
         <img style={{"width": "50px"}} src="https://image.flaticon.com/icons/svg/50/50565.svg" className = "logo"
        alt ="logo"/>
        <button class="navbar-toggler navBarToggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse menu" id="navbarSupp{ortedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link link headerLinks activeHeaderLinks" to="/">Main </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link  headerLinks" to="/">Hotels</Link>
            </li>
            <li class="nav-item">
<<<<<<< HEAD
              <Link class="nav-link link text-white" to="/restauranRatings">Restaurants</Link>
=======
              <Link class="nav-link link  headerLinks" to="/restauranRatings">Restaurans</Link>
>>>>>>> cf7eeb4592d599da35c727ed878d4ce0c91b0489
            </li>
            {/* <li class="nav-item">
              <Link class="nav-link link" to="/">Развлечения</Link>
            </li> */}
            {/* <li class="nav-item"> */}
              {/* <Link class="nav-link link" to="/">Услуги</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link link" to="/">Курсы</Link>
            </li> */}
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle link text-white" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More
              </Link>
              <div class="dropdown-menu headerDropDown" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item link headerDropItem" to="/">Развлечения</Link>
                <Link class="dropdown-item link headerDropItem" to="/">Услуги</Link>
                <Link class="dropdown-item link headerDropItem" to="/">Курсы</Link>
                <Link class="dropdown-item link headerDropItem" to="/">Подробнее</Link>
                <Link class="dropdown-item link headerDropItem" to="/">Отзывы</Link>
                <Link class="dropdown-item link headerDropItem" to="/">О нас</Link>
              </div>
            </li>
          </ul> 
          </div>
          <User 
              name = {this.state.userName}
              lastName = {this.state.userLastName}
              photo = {this.state.userPhoto}
               />    
          </nav>
          </div>
    );
  }
}

export default StickyHeader;
