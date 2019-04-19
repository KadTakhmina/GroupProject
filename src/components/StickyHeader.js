import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/var.css";
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="StickyHeader">
            <nav class="navbar navbar-expand-md  bg-white ">
              <button
                class="navbar-toggler"
                data-toggle="collapse"
                data-targer="#collapse_target"
              >
                <span class="navbar-toggler-icon" />
              </button>
            {/* 
            <div class="collapse navbar-collapse" id="collapse_target">
               <Link class="navbar-brand">vnfdj</Link>
               <span class="navbar-text">cdckc</span>
            </div> */}
            
              <ul class="navbar-nav">
              <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Главная
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Отели
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/restauranRatings">
                    Рестораны
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Развлечения
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Услуги
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Курсы
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    data-target="dropdown_target"
                    to="/"
                  >
                    Еще
                    <span class="caret" />
                    <div class="dropdown-menu" aria-labelledby="dropdown_target">
                      <Link class="dropdown-item">Подробнее</Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item">Заведения</Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item">Салоны</Link>
                      <div class="dropdown-divider" />
                      <Link class="dropdown-item">Контакты</Link>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
=======
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
>>>>>>> 17e8b7f92fb4faeceb5c49d6e51194ac52e9a0a9
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
