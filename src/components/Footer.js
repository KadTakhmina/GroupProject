import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Footer.css";
import iconFacebook from "../img/iconFacebook.svg";
import iconInstagram from "../img/iconInstagram.svg";
import iconVK from "../img/iconVK.svg";
import iconWattsapp from "../img/iconWattsapp.svg";
import iconTwitter from "../img/iconTwitter.svg";



class Footer extends Component {
  render() {
    return (
      <footer className="Footer" >
        <div className="container py-5">
          <div class="row categotyLists">
            <div class="col-lg-3 col-md-3 col-6">
              <ul class="list-unstyled text-small text-left">
              <h5 >О нас</h5>
                <li>
                  <Link to="/" class="footerLink" >
                    O сервисе
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    O нас
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Подробнее
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">
              
              <ul class="list-unstyled text-small text-left">
              <h5>Новости</h5>
                <li >
                  <Link to="/" class="footerLink">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Рейтинги
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                   Отзывы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Поиск
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">   
              <ul class="list-unstyled text-small text-left">
              <h5>Карта</h5>
                <li>
                  <Link to="/" class="footerLink">
                    Карта
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Поиск
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Места
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-3 col-6">    
              <ul class="list-unstyled text-small text-left col-lg-3 col-md-3 col-6">
              <h5>Заведения</h5>
                <li>
                  <Link to="/" class="footerLink">
                    Рестораны
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Отели
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to="/" class="footerLink">
                    Услуги
                  </Link>
                </li>
              </ul>
            </div>        
          </div>
         
          <div className = "row my-5">
          
          <div class=" col-lg-6 col-md-6 col-12  ">
            <Link to="/" className = "d-block text-white">
              г.Бишкек, Кыргызстан
            </Link>
            <p class=" py-3">Copyright © 2019</p>
          </div>
          <ul class=" list-unstyled col-lg-6 col-md-6 col-12">
            <li className = "socialIcons">
              <Link to="/">
                <img src = {iconInstagram} />
              </Link>
            </li>
            <li className = "socialIcons">
              <Link to="/">
                <img src = {iconFacebook} />
              </Link>
            </li>
            <li className = "socialIcons">
              <Link to="/">
                <img src = {iconTwitter} />
              </Link>
            </li>
            <li className = "socialIcons">
              <Link to="/">
                <img src = {iconVK} />
              </Link>
            </li>
            <li className = "socialIcons">
              <Link to="/">
                <img src = {iconWattsapp} />
              </Link>
            </li>
           
          </ul>
          </div>
          
        </div>
        </footer>
    );
  }
}

export default Footer;
