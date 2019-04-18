import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/var.css";
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  render() {
    return (
      <div className="StickyHeader ">
      <nav className="navbar navbar-expand-lg container">
  <Link class="navbar-brand" to="/" >logo </Link>
  <button class="navbar-toggler navBarToggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Главная </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Отели</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/restauranRatings">Рестораны</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Развлечения</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Услуги</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/">Курсы</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Еще
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link class="dropdown-item" to="/">Подробнее</Link>
          <Link class="dropdown-item" to="/">Отзывы</Link>
          <Link class="dropdown-item" to="/">О нас</Link>
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
