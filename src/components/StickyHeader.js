import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/var.css";
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  render() {
    return (
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
        </div>
    );
  }
}

export default StickyHeader;
