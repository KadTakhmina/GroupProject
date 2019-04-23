import React, { Component } from "react";
import { Link,NavLink } from "react-router-dom";

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
    const active = {
      borderBottom:"3px solid var(--main-color)",
    color: "var(--main-color)",

    
    }
    return (
     
      <div className="StickyHeader ">
       <nav className="navbar navbar-expand-lg container"  >
         <img style={{"width": "50px"}} src="https://image.flaticon.com/icons/svg/50/50565.svg" className = "logo"
        alt ="logo"/>
        <button class="navbar-toggler navBarToggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse menu" id="navbarSupp{ortedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <NavLink exact class="nav-link link headerLinks  " activeStyle = {active} to="/">Главная </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact  class="nav-link link  headerLinks  " activeStyle = {active}  to="/restauranRatings">Рейтинги</NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link link  headerLinks" activeStyle = {active} activeClassName  = "active" to="/News">Новости</NavLink>
            </li>
           
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle link text-white" to="/" id="navbarDropdown" activeStyle = {active} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Еще
              </Link>
              <div class="dropdown-menu headerDropDown" aria-labelledby="navbarDropdown">
                <NavLink class="dropdown-item link headerDropItem" to="/">Развлечения</NavLink>
                <NavLink class="dropdown-item link headerDropItem" to="/">Услуги</NavLink>
                <NavLink class="dropdown-item link headerDropItem" to="/">Курсы</NavLink>
                <NavLink class="dropdown-item link headerDropItem" to="/">Подробнее</NavLink>
                <NavLink class="dropdown-item link headerDropItem" to="/">Отзывы</NavLink>
                <NavLink class="dropdown-item link headerDropItem" to="/">О нас</NavLink>
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
