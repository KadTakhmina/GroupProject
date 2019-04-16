import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/var.css";
import "./styles/StickyHeader.css";

class StickyHeader extends Component {
  render() {
    return (
      <div className="StickyHeader">
        {/* <nav class="navbar navbar-expand-lg  headerMenu ">
             <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <Link class="nav-link" to= "/">Отели <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/restaurants">Рестораны</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/raitings">Рейтинги(Развлечения) </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Услуги</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Курсы</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Еще
                    </Link>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <Link class="dropdown-item" to="/">Action</Link>
                      <Link class="dropdown-item" to="/">Another action</Link>
                      <Link class="dropdown-item" to="/">Something else here</Link>
                    </div>
                  </li>
                </ul>
             </div>
           </nav> */}
        <nav class="navbar navbar-expand-md navbar-light bg-white sticky-top">
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-targer="#collapse_target"
          >
            <span class="navbar-toggler-icon" />
          </button>
          {/* 
      <div class="collapse navbar-collapse" id="collapse-target">
        <Link class="navbar-brand">LoGO</Link>
        <span class="navbar-text">Main page</span>
      </div> */}

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Отели
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
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
